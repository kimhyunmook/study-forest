import React, { useState } from "react";
import "./Modal.css";
import DeleteIcon from "../icons/btn_determinate.png";
import axios from "axios";

const Modal = ({ habits, studyId, onUpdate, onClose }) => {
  const [tempHabits, setTempHabits] = useState(habits); // 임시 습관 목록
  const [showInput, setShowInput] = useState(false); // 입력칸 표시 여부
  const [newHabit, setNewHabit] = useState(""); // 새로 입력할 습관

  // 습관 삭제 함수 (백엔드와 동기화)
  const handleDeleteHabit = async (index, habitId) => {
    try {
      // 해당 습관 삭제 API 호출
      await axios.delete(`/api/study/${studyId}/habits/${habitId}`);
      const updatedHabits = tempHabits.filter((_, i) => i !== index); // 삭제된 습관 제외
      setTempHabits(updatedHabits);
    } catch (error) {
      console.error("습관 삭제 실패:", error);
    }
  };

  // 입력한 습관 추가 함수 (백엔드와 동기화)
  const handleAddHabit = async () => {
    if (newHabit.trim()) {
      try {
        const response = await axios.post(`/api/study/${studyId}/habits`, {
          name: newHabit,
        });
        const addedHabit = response.data.data; // 백엔드에서 반환된 새로운 습관 데이터
        setTempHabits([...tempHabits, addedHabit.name]); // UI 업데이트
        setNewHabit(""); // 입력 초기화
        setShowInput(false); // 입력칸 숨기기
      } catch (error) {
        console.error("습관 추가 실패:", error);
      }
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
                onClick={() => handleDeleteHabit(index, habit.id)} // 삭제 버튼 클릭 시 삭제
              >
                <img src={DeleteIcon} alt="삭제" className="delete-icon" />
              </button>
            </li>
          ))}

          {/* 새 입력칸 */}
          {showInput && (
            <li className="modal-item new-input">
              <input
                type="text"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)} // 입력값 업데이트
                placeholder="새로운 습관 입력"
                className="modal-input"
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleAddHabit(); // Enter 키로 추가
                }}
              />
              <button
                className="delete-button"
                onClick={() => {
                  setShowInput(false);
                  setNewHabit(""); // 입력 초기화
                }}
              >
                <img src={DeleteIcon} alt="삭제" className="delete-icon" />
              </button>
            </li>
          )}
        </ul>

        {/* 추가 버튼 */}
        <div className="add-habit">
          <button
            className="add-button"
            onClick={() => setShowInput(true)} // 입력칸 표시
          >
            +
          </button>
        </div>

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
