import React, { useState, useEffect } from "react";
import "./HabitList.css";

const HabitsList = ({ habits }) => {
  const [selectedIndexes, setSelectedIndexes] = useState([]); // 선택된 항목들의 인덱스 저장
  const [habitData, setHabitData] = useState(habits);

  useEffect(() => {
    setHabitData(habits); // habits 변경 시 habitData를 업데이트
  }, [habits]);

  const handleItemClick = (index) => {
    setSelectedIndexes((prevSelectedIndexes) => {
      if (prevSelectedIndexes.includes(index)) {
        return prevSelectedIndexes.filter((i) => i !== index); // 이미 선택된 항목이면 제거
      } else {
        return [...prevSelectedIndexes, index]; // 아니면 추가
      }
    });
  };

  return (
    <div>
      {habitData && habitData.length > 0 ? ( // habitData 유효할 경우에만 렌더링
        <ul className="habit-items">
          {habitData.map((habit, index) => (
            <li
              key={habit.id} // habit 객체의 고유 id를 키로 사용
              className={`habit-item ${selectedIndexes.includes(index) ? "selected" : ""
                }`} // 선택된 상태인지 확인
              onClick={() => handleItemClick(index)} // 항목 클릭 시 처리
            >
              {habit.name} {/* habit 객체의 name 속성만 렌더링 */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No habitData to display</p> // habits가 비어 있을 때 표시
      )}
    </div>
  );
};

export default HabitsList;
