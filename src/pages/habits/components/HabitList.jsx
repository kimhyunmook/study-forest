import React, { useState } from "react";
import "./HabitList.css";

const HabitsList = ({ habits = [] }) => {
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
    <div>
      {habits && habits.length > 0 ? ( // habits가 유효할 경우에만 렌더링
        <ul className="habit-items">
          {habits.map((habit, index) => (
            <li
              key={index}
              className={`habit-item ${
                selectedIndexes.includes(index) ? "selected" : ""
              }`} // 선택된 상태인지 확인
              onClick={() => handleItemClick(index)}
            >
              {habit.name} {/* habit 객체의 name 속성만 렌더링 */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No habits to display</p> // habits가 비어 있을 때 표시
      )}
    </div>
  );
};

export default HabitsList;
