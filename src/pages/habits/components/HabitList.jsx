import React from "react";
import "./HabitList.css";

const HabitsList = ({ habits, onEdit }) => {
  return (
    <div className="habits-list">
      <div className="habits-header">
        <h2 className="habit-title">오늘의 습관</h2>
        <button className="edit-button" onClick={onEdit}>
          목록 수정
        </button>
      </div>
      <ul className="habit-items">
        {habits.map((habit, index) => (
          <li key={index} className="habit-item">
            {habit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitsList;
