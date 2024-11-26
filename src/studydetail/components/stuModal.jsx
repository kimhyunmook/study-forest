import React, { useState } from "react";
import Modal from "react-modal"; // modal 설치

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 상태

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setErrorMessage(""); // 모달을 닫을 때 오류 메시지 초기화
  };

  const handlePasswordSubmit = () => {
    // 비밀번호가 일치하는지 확인
    const correctPassword = "1234"; // 예시 비밀번호

    if (password === correctPassword) {
      setErrorMessage(""); // 비밀번호가 맞으면 오류 메시지 초기화
      closeModal(); // 모달 닫기
      // 인증 후 다른 작업 수행
    } else {
      setErrorMessage("🚨비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
    }
  };

  return (
    <div>
      <button onClick={openModal}>모달 열기</button>

      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <div>
          <p>연우의 개발공장</p>
          <p>권한이 필요해요!</p>
          <p>비밀번호</p>

          <div>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력
            />
          </div>

          {errorMessage && (
            <div style={{ color: "red", marginTop: "10px" }}>
              {errorMessage}
            </div>
          )}

          <button onClick={handlePasswordSubmit}>인증</button>

          <button onClick={closeModal}>
            <img src="수정하러가기img" alt="수정하러 가기" />
          </button>
        </div>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button>
            <img src="오늘의습관으로가기img" alt="오늘의 습관으로 가기" />
          </button>
          <button>
            <img src="오늘의집중으로가기img" alt="오늘의 집중으로 가기" />
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
