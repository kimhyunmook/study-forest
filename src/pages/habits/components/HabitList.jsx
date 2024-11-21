import React, { useState } from "react";
import "./HabitList.css";

const HabitsList = ({ habits, onEdit }) => {
  const [selectedIndexes, setSelectedIndexes] = useState([]); // 선택된 항목들의 인덱스 저장

  const handleItemClick = (index) => {
    // 이미 선택된 항목이면 제거하고, 아니면 추가
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(selectedIndexes.filter((i) => i !== index));
    } else {
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  return (
    <div className="habits-list">
      <div className="habits-header">
        <h2 className="habit-title">오늘의 습관</h2>
        {/* 목록 수정 버튼에 onClick 이벤트 추가 */}
        <button className="edit-button" onClick={onEdit}>
          목록 수정
        </button>
      </div>
      <ul className="habit-items">
        {habits.map((habit, index) => (
          <li
            key={index}
            className={`habit-item ${
              selectedIndexes.includes(index) ? "selected" : ""
            }`} // 선택된 상태인지 확인
            onClick={() => handleItemClick(index)}
          >
            {habit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitsList;
