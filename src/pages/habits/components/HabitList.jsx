import React, { useState } from "react";
import "./HabitList.css";

const HabitsList = ({ habits }) => {
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
  );
};

export default HabitsList;
