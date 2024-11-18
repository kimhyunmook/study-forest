import React, { useState } from "react";
import Header from "./components/Header";
import HabitsList from "./components/HabitList";
import Modal from "./components/Modal";
import "./todayHabits.css";



const TodayHabits = () => {
  const [habits, setHabits] = useState([
    "리부트 정상화 해줬잖아",
    "본서버 완화도 해줬잖아",
    "컨텐츠 출시도 해줬잖아",
    "그냥 다 해줬잖아",
    "아니지 나는 정상화의 신",
    "아직 남아 있는 최후의 수단이 있지",
    "이제 돈 열심히 써줄 거지?",
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="today-habits">
      <Header />
      {/* HabitsList 내에서 버튼 처리 */}
      <HabitsList
        habits={habits}
        onEdit={() => setIsModalOpen(true)} // Modal 열기 함수 전달
      />
      {isModalOpen && (
        <Modal
          habits={habits}
          onUpdate={(updatedHabits) => setHabits(updatedHabits)}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default TodayHabits;
