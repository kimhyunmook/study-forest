import React, { useState } from "react";
import Modal from "react-modal"; // modal 설치

function modal() {
  const [isOpen, stetIsOpen] = useState(false);

  const openModal = () => {
    stetIsOpen(true);
  };

  const closeModal = () => {
    stetIsOpen(false);
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      width: "300px",
      height: "400px",
      margin: "auto",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      padding: "20px",
    }
  }
}

return (
  <div>
    <button onClick={isOpen} onRequestClose={closeModal} style={customStyles}></button>

    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <p>연우의 개발공장</p>
      <p>권한이 필요해요!</p>
      <p>비밀번호</p>
      <div>
        <input>비밀번호를 입력해주세요</input>
      </div>
      <button onClick={closeModal}> 
        <img 
        scr={수정하러가기img} 
        alt="수정하러 가기"
        />
      </button>
    </Modal>
  </div>
)

export default App;