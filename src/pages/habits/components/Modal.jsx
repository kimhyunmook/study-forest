import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import DeleteIcon from "../icons/btn_determinate.png";
import instance from "../../../shared/api/instance";
import { useParams, useNavigate } from "react-router-dom";
const Modal = ({ habits, onUpdate, onClose, studyId }) => {
  const [tempHabits, setTempHabits] = useState(habits); // 임시 습관 목록
  const [showInput, setShowInput] = useState(false); // 입력칸 표시 여부
  const [newHabit, setNewHabit] = useState(""); // 새로 입력할 습관
  const navigate = useNavigate();
  const { id } = useParams();

  // 습관 삭제 함수 (백엔드와 동기화)
  const handleDeleteHabit = async (habitId, index) => {
    console.log(habitId);
    try {
      await instance.delete(`/api/habitPage/habits/${habitId}`);
      setTempHabits((prevHabits) => prevHabits.filter((_, i) => i !== index)); // UI 반영
      console.log("습관 삭제 성공");
      if (!newHabit.trim()) {
        navigate(`/study/${id}`);
      }
    } catch (error) {
      console.error("습관 삭제 실패:", error);
    }
  };

  // 수정 완료 버튼 클릭 시 습관 추가 함수 (백엔드와 동기화)
  const handleAddHabit = async () => {
    if (newHabit.trim()) {
      try {
        console.log("fe post요청1 : " + studyId);
        // 습관 추가 요청 시 studyId를 함께 전달
        const response = await instance.post(`/api/habitPage/habits`, {
          name: newHabit,      // 입력한 습관 이름
          studyId: studyId,         // studyId 추가
        });
        if (response.status === 201) {
          onClose();
        }
        console.log("fe post요청2 : " + studyId);
        const addedHabit = response.data;  // 새로 추가된 습관 데이터
        setTempHabits([...tempHabits, addedHabit]);  // UI에 반영
        setNewHabit("");  // 입력 초기화
        setShowInput(false);  // 입력칸 숨기기
        console.log("습관 추가 성공:", addedHabit);
      } catch (error) {
        console.error("습관 추가 실패:", error);
      }
      navigate(`/study/${id}`);
    }
  };

  // 수정 완료 함수 (모든 습관을 업데이트)
  const handleConfirm = () => {
    const updatedHabits = tempHabits.filter((habit) => habit.name.trim() !== ""); // 빈칸 제거
    onUpdate(updatedHabits); // 부모 컴포넌트로 전달
    onClose(); // 모달 닫기
    navigate(`/study/${id}`);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">습관 목록</h2>
        <ul className="modal-list">
          {tempHabits.map((habit, index) => (
            <li key={index} className="modal-item">
              <span className="habit-text">{habit.name}</span>
              <button
                className="delete-button"
                onClick={() => {
                  console.log("삭제 버튼 클릭됨, habitId:", habit.id); // 삭제 버튼 클릭 시 habitId 출력
                  handleDeleteHabit(habit.id, index); // 여기서 habit.id와 index를 전달
                }}
              >
                <img src={DeleteIcon} alt="삭제" className="delete-icon" />
              </button>
            </li>
          ))}

          {/* 입력칸 표시 */}
          {showInput && (
            <li className="modal-item new-input">
              <input
                type="text"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)} // 입력값 업데이트
                placeholder="새로운 습관 입력"
                className="modal-input"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAddHabit(); // Enter 키로 습관 추가
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
          <button className="confirm-button" onClick={handleAddHabit}>
            수정 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
