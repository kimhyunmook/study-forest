import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ habits, onUpdate, onClose }) => {
  const [newHabit, setNewHabit] = useState("");

  // 습관 삭제 함수
  const handleDeleteHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index); // 해당 인덱스 제외
    onUpdate(updatedHabits); // 부모 컴포넌트로 업데이트
  };

  // 습관 추가 함수
  const handleAddHabit = () => {
    if (newHabit.trim()) {
      onUpdate([...habits, newHabit]);
      setNewHabit(""); // 입력 초기화
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">습관 목록</h2>
        <ul className="modal-list">
          {habits.map((habit, index) => (
            <li key={index} className="modal-item">
              <span>{habit}</span>
              <button
                className="delete-button"
                onClick={() => handleDeleteHabit(index)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
        <div className="add-habit">
          <input
            type="text"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            placeholder="새로운 습관 추가"
            className="modal-input"
          />
          <button className="add-button" onClick={handleAddHabit}>
            +
          </button>
        </div>
        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose}>
            취소
          </button>
          <button className="confirm-button" onClick={onClose}>
            수정 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
