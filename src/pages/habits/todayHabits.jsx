import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HabitsList from "./components/HabitList";
import Modal from "./components/Modal";
import "./todayHabits.css";
import Layout from "../../shared/components/Layout";
import axios from "axios";

const TodayHabits = () => {
  const [habits, setHabits] = useState([]); // 습관 데이터를 저장할 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  const studyId = "현재 Study ID"; // Study ID를 동적으로 가져오거나 useParams를 사용할 수 있음

  // 습관 데이터 가져오기
  useEffect(() => {
    async function fetchHabits() {
      try {
        const response = await axios.get(`/api/study/${studyId}/habits`);
        setHabits(response.data.data.map((habit) => habit.name)); // 이름만 추출해서 저장
      } catch (error) {
        console.error("오늘의 습관 데이터 가져오기 실패:", error);
      }
    }

    fetchHabits();
  }, [studyId]);

  // 습관 목록 업데이트 (추가/삭제 후 호출)
  const updateHabits = async (updatedHabits) => {
    try {
      // 여기에서 습관 추가/삭제 API 호출 가능
      // 예: axios.post 또는 axios.delete
      setHabits(updatedHabits); // UI에 반영
    } catch (error) {
      console.error("습관 업데이트 실패:", error);
    }
  };

  return (
    <Layout paddingBottom={"100px"} width={"1248px"}>
      <div className="today-habits">
        <Header />

        {/* 흰색 상자 */}
        <div className="habits-container">
          {/* 고정된 박스 내부 헤더 */}
          <div className="habits-header">
            <h2 className="habits-title">오늘의 습관</h2>
            <button
              className="edit-button"
              onClick={() => setIsModalOpen(true)} // Modal 열기
            >
              목록 수정
            </button>
          </div>

          {/* 습관 리스트 또는 안내 문구 */}
          {habits.length > 0 ? (
            <HabitsList habits={habits} />
          ) : (
            <div className="no-habits-message">
              <p>아직 습관이 없어요</p>
              <p>목록 수정을 눌러 습관을 추가해보세요</p>
            </div>
          )}
        </div>

        {/* 모달 */}
        {isModalOpen && (
          <Modal
            habits={habits}
            onUpdate={updateHabits} // 습관 업데이트 함수 전달
            onClose={() => setIsModalOpen(false)} // Modal 닫기
          />
        )}
      </div>
    </Layout>
  );
};

export default TodayHabits;
