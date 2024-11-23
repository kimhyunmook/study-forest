import React, { useState, useEffect } from "react";
import EmojiPickerComponent from "../components/emoji";
import { getStudyById } from "../api/studyapi";
import { useParams, useNavigate } from "react-router-dom";
import '../css/study.css';
import HabitTable from "../components/HabitTable";
import { StuModal } from "../components/stuModal";
import { CreateButtonModal } from "../../detailPage/components/CreateButtonModal";
import { createEmoji } from "../api/studyapi";

function StudyPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // URL에서 스터디 ID 추출

  const [studyData, setStudyData] = useState({});
  const [habitData, setHabitData] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState(null); // 선택된 이모지 상태
  const [isAlertVisible, setAlertVisible] = useState(false); // 수정/삭제 비밀번호 모달
  const [isAlertVisible1, setAlertVisible1] = useState(false); // 알림 메시지 모달
  const [actionType, setActionType] = useState(""); // 'edit' 또는 'delete'
  const [alertMessage, setAlertMessage] = useState(""); // 모달 메시지
  const pointIcon = "/img/pointIcon.png"; // 포인트 아이콘 경로
  const [emojiList, setEmojiList] = useState(false);

  // 데이터 요청 함수
  const fetchStudyData = async () => {
    try {
      const data = await getStudyById(id);
      setStudyData(data);
      setHabitData(data.habit || []);
      console.log("Fetched study data:", data);
    } catch (error) {
      console.error("Failed to fetch study data:", error.message);
    }
  };

  useEffect(() => {
    fetchStudyData();
  }, [id]);

  const toggleEmojiList = () => {
    setEmojiList(!emojiList);
  };

  const handlePasswordSubmit = (inputPassword) => {
    if (!inputPassword) {
      setAlertMessage("비밀번호를 입력하세요.");
      setAlertVisible1(true);
      return;
    }

    if (inputPassword === studyData.password) {
      closeModal();
      if (actionType === "edit") {
        navigate(`/study/${id}/todayhabits`);
      } else if (actionType === "delete") {
        // 삭제 로직 추가 해야함
        console.log("Study deleted successfully");
      }
    } else {
      setAlertMessage("비밀번호가 틀렸습니다.");
      setAlertVisible1(true);
    }
  };

  // 모달 열기
  const openModal = (action) => {
    setActionType(action);
    setAlertVisible(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setAlertVisible(false);
    setActionType("");
  };

  return (
    <div>
      <div className="study-page-contain">
        {/* 이모지 리스트 */}
        <div className="first-box">
          <div className="emoji-all-box">
            <div className="emoji-list-favorite-container">
              {studyData.emojis && studyData.emojis.length > 0 ? (
                <>
                  {/* 상위 3개 이모지 표시 */}
                  {studyData.emojis
                    .sort((a, b) => b.value - a.value) // value 값으로 내림차순 정렬
                    .slice(0, 3) // 상위 3개 추출
                    .map((emoji) => (
                      <div key={emoji.id} className="emoji-list-favorite">
                        <div className="emoji-icon">{emoji.emojiIcon}</div>
                        <div className="emoji-value">{emoji.value}</div>
                      </div>
                    ))}

                  {studyData.emojis.length > 3 && (
                    <div className="emoji-list-add-box" onClick={toggleEmojiList}>
                      +{studyData.emojis.length - 3}...
                    </div>
                  )}
                </>
              ) : (
                <div className="emoji-message">표시할 이모지가 없습니다.</div>
              )}
            </div>
            <div>
              <EmojiPickerComponent
                selectedEmoji={selectedEmoji}
                setEmoji={setSelectedEmoji}
                studyId={id}
                fetchStudyData={fetchStudyData} // 데이터 갱신 함수 전달
              />
            </div>
          </div>

          {/* 버튼 그룹 */}
          <div className="button-group">
            <button className="button-click">공유하기 | </button>
            <button className="button-click" onClick={() => openModal("edit")}>수정하기 | </button>
            <button className="button-click1" onClick={() => openModal("delete")}>스터디 삭제하기</button>
          </div>
        </div>

        {emojiList &&
          <div className="emoji-All-List">
            {studyData.emojis && studyData.emojis.length > 0 ? (
              <>
                {studyData.emojis
                  .sort((a, b) => b.value - a.value)
                  .map((emoji) => (
                    <div key={emoji.id} className="emoji-list-favorite-list">
                      <div className="emoji-icon-list">{emoji.emojiIcon}</div>
                      <div className="emoji-value-list">{emoji.value}</div>
                    </div>
                  ))}
              </>
            ) : (
              <div className="emoji-message">표시할 이모지가 없습니다.</div>
            )}
          </div>}

        <div className="introduce-box">
          {studyData.nickName ? (
            <div className="UserName">{studyData.nickName} 의 {studyData.studyName}</div>
          ) : (
            <p>로딩 중...</p>
          )}
          <div className="introBox">
            <div className="intro-itle">소개</div>
            <div className="intro-introduce">{studyData.introduce}</div>
          </div>
          <div className="pointBox">
            <p className="now-point">현재까지 획득한 포인트</p>
            <div className="now-point-value">
              <img src={pointIcon} alt="point" />
              {studyData.point || 0}P 획득
            </div>
          </div>
        </div>

        {/* 습관 테이블 */}
        <div className="study-page-contain1">
          <div className="first-box1">
            <HabitTable habit={habitData} />
          </div>
        </div>

        {/* 모달 컴포넌트 */}
        <StuModal
          studyName={studyData.studyName}
          password={studyData.password}
          isVisible={isAlertVisible}
          onClose={closeModal}
          onSubmit={handlePasswordSubmit}
          actionType={actionType}
        />
        <CreateButtonModal
          message={alertMessage}
          isVisible={isAlertVisible1}
          onClose={() => setAlertVisible1(false)}
        />
      </div>
    </div>
  );
}

export default StudyPage;
