import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HabitsList from "./components/HabitList";
import Modal from "./components/Modal";
import "./todayHabits.css";
import Layout from "../../shared/components/Layout";
import axios from "axios";
import { useParams } from "react-router-dom"; // studyId 동적 가져오기
import instance from "../../shared/api/instance";

const TodayHabits = () => {
  const { id } = useParams(); // URL에서 studyId를 동적으로 가져옴
  console.log(id);
  const [habits, setHabits] = useState([]); // 습관 데이터를 저장할 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 습관 데이터 가져오기
  useEffect(() => {
    async function fetchHabits() {
      try {
        const response = await instance.get(`/api/habitPage/habits/${id}`);
        setHabits(response.data.data); // 데이터 저장
      } catch (error) {
        console.error("오늘의 습관 데이터 가져오기 실패:", error);
      }
    }

    fetchHabits();
  }, [id]);

  // 습관 목록 업데이트 (추가/삭제 후 호출)
  const updateHabits = async (updatedHabits) => {
    // 로컬 상태 업데이트 (API 통신 전에도 화면에 즉시 반영)
    setHabits(updatedHabits);

    // API 호출을 통해 백엔드와 동기화
    try {
      await instance.put(`/api/habitPage/habits/${id}`, { habits: updatedHabits });
    } catch (error) {
      console.error("습관 업데이트 실패:", error);
    }
  };

  return (
    <Layout paddingBottom={"100px"} width={"1248px"}>
      <div className="today-habits">
        <Header studyId={id} />

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
            <HabitsList
              habits={habits}
              studyId={id} /> // 습관 리스트 전달
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
            studyId={id}
            habits={habits}
            setHabits={setHabits}
            onUpdate={(updatedHabits) => updateHabits(updatedHabits)} // 습관 업데이트 로직 전달
            onClose={() => setIsModalOpen(false)} // Modal 닫기
          />
        )}
      </div>
    </Layout>
  );
};

export default TodayHabits;
