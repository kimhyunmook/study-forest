import React, { useState } from "react";
import "./Modal.css";
import DeleteIcon from "../icons/btn_determinate.png";

const Modal = ({ habits, onUpdate, onClose }) => {
  const [tempHabits, setTempHabits] = useState(habits); // 임시 습관 목록
  const [showInput, setShowInput] = useState(false); // 입력칸 표시 여부
  const [newHabit, setNewHabit] = useState(""); // 새로 입력할 습관

  // 습관 삭제 함수
  const handleDeleteHabit = (index) => {
    const updatedHabits = tempHabits.filter((_, i) => i !== index); // 해당 인덱스 제외
    setTempHabits(updatedHabits);
  };

  // 입력한 습관 추가 함수
  const handleAddHabit = () => {
    if (newHabit.trim()) {
      setTempHabits([...tempHabits, newHabit]); // 새 습관 추가
      setNewHabit(""); // 입력 초기화
      setShowInput(false); // 입력칸 숨기기
    }
  };

  // 수정 완료 함수
  const handleConfirm = () => {
    const updatedHabits = tempHabits.filter((habit) => habit.trim() !== ""); // 빈칸 제거
    onUpdate(updatedHabits); // 부모 컴포넌트로 전달
    onClose(); // 모달 닫기
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">습관 목록</h2>
        <ul className="modal-list">
          {tempHabits.map((habit, index) => (
            <li key={index} className="modal-item">
              <span className="habit-text">{habit}</span>
              <button
                className="delete-button"
                onClick={() => handleDeleteHabit(index)} // 삭제 버튼 클릭 시 삭제
              >
                <img src={DeleteIcon} alt="삭제" className="delete-icon" />
              </button>
            </li>
          ))}
        </ul>

        {/* 새 입력칸 + 삭제 버튼 */}
        {showInput && (
          <div className="new-habit">
            <input
              type="text"
              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)} // 입력값 업데이트
              placeholder="새로운 습관 입력"
              className="modal-input"
            />
            <button
              className="delete-button"
              onClick={() => setShowInput(false)} // 입력칸 닫기
            >
              <img src={DeleteIcon} alt="삭제" className="delete-icon" />
            </button>
          </div>
        )}

        {/* + 버튼 */}
        {!showInput && (
          <div className="add-habit">
            <button
              className="add-button"
              onClick={() => setShowInput(true)} // 입력칸 표시
            >
              +
            </button>
          </div>
        )}

        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose}>
            취소
          </button>
          <button className="confirm-button" onClick={handleConfirm}>
            수정 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
