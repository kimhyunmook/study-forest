import React, { useState } from "react";
import Header from "./components/Header";
import HabitsList from "./components/HabitList";
import Modal from "./components/Modal";
import "./todayHabits.css";
import Layout from "../../shared/components/Layout";

const TodayHabits = () => {
  const [habits, setHabits] = useState([
    "미라클모닝 6시 기상",
    "아침 챙겨 먹기",
    "React 스터디 책 1챕터 읽기",
    "스트레칭",
    "영양제 챙겨 먹기",
    "사이드 프로젝트",
    "물 2L 먹기",
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

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
            onUpdate={(updatedHabits) => setHabits(updatedHabits)} // 습관 업데이트
            onClose={() => setIsModalOpen(false)} // Modal 닫기
          />
        )}
      </div>
    </Layout>
  );
};

export default TodayHabits;

