import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react"; // emoji.jsx
import IntroduceInput from "./introduce"; // introduce.jsx
import CheckboxImage from "./checkbox"; // checkbox.jsx
import Modal from "react-modal"; // stuModal.jsx

function StudyPage() {
  const [isOpen, setIsOpen] = useState(false); // 모달 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 상태
  const [selectedEmojis, setSelectedEmojis] = useState([]); // 선택된 이모티콘 상태

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setErrorMessage(""); // 모달을 닫을 때 오류메시지 초기화
  };

  const handlePasswordSubmit = () => {
    const correctPassword = "1234"; // 예시 비밀번호
    if (password === correctPassword) {
      setErrorMessage(""); // 비밀번호가 맞으면 오류 메시지 초기화
      closeModal(); // 모달 닫기
    } else {
      setErrorMessage("🚨비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
    }
  };

  const handleEmojiClick = (emoji) => {
    // 선택된 이모티콘을 상태에 추가
    setSelectedEmojis((prevEmojis) => [...prevEmojis, emoji.emoji]);
  };

  return (
    <div>
      {/* "추가" 버튼으로 텍스트 변경 */}
      <button className="add-button" onClick={() => setSelectedEmojis([])}>
        추가
      </button>

      <div className="study-page-contain">
        <div className="first-box">
          {/* 첫 박스 - 이모지 선택 */}
          <div className="emote-box">
            {/* 이모지 선택 기능 */}
            <EmojiPicker onEmojiClick={handleEmojiClick} />
            <div className="selected-emojis">
              {/* 이모티콘 추가된 리스트 */}
              <h3>선택된 이모티콘</h3>
              {selectedEmojis.length > 0 ? (
                selectedEmojis.map((emoji, index) => (
                  <span className="emoji" key={index}>
                    {emoji}
                  </span>
                ))
              ) : (
                <p>이모티콘을 추가해보세요!</p>
              )}
            </div>
          </div>
        </div>

        {/* 두번째 박스 - 소개 입력 */}
        <div className="introduce-box">
          <div className="UserName">연우의 개발공장</div>
          <IntroduceInput />
          <p>소개</p>
          <p>오늘하루도 화이팅:) </p>
          <p className="now-point">현재까지 획득한 포인트</p>
          <div>310P 획득???</div>
        </div>

        {/* 세번째 박스 - 습관 체크박스 */}
        <div className="habbit-box">
          <div className="habit-record-box">습관 기록표</div>
          <CheckboxImage />
        </div>

        {/* 습관 기록표에 습관이 없을 경우 */}
        <div className="notyet-habit">
          아직 습관이 없어요
          <br />
          오늘의 습관에서 습관을 생성해보세요
        </div>

        {/* 연우의 개발공장 모달창 */}
        <div>
          <button className="open-modal-button" onClick={openModal}>
            모달 열기
          </button>
          <Modal isOpen={isOpen} onRequestClose={closeModal}>
            <div className="modal-content">
              <p>연우의 개발공장</p>
              <p>권한이 필요해요!</p>
              <p>비밀번호</p>
              <div>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력
                  className="password-input"
                />
              </div>

              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}

              <button className="password-submit-button" onClick={handlePasswordSubmit}>
                인증
              </button>

              <button className="close-modal-button" onClick={closeModal}>
                <img className="modal-img" src="수정하러가기img" alt="수정하러 가기" />
              </button>
            </div>
            <div className="modal-footer">
              <button className="modal-footer-button">
                <img
                  className="modal-footer-img"
                  src="오늘의습관으로가기img"
                  alt="오늘의 습관으로 가기"
                />
              </button>
              <button className="modal-footer-button">
                <img
                  className="modal-footer-img"
                  src="오늘의집중으로가기img"
                  alt="오늘의 집중으로 가기"
                />
              </button>
            </div>
          </Modal>
        </div>

        {/* 연우의 개발공장 모달창 비밀번호 오류시 */}
        <div className="wrong-password">
          <p>🚨비밀번호가 일치하지 않습니다. 다시 입력해주세요.</p>
        </div>
      </div>
    </div>
  );
}

export default StudyPage;
