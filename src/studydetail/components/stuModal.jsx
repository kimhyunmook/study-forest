import React, { useState } from "react";
import Modal, from "react-modal"; // modal 설치

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
      <h1>Modal</h1>
      <p>모달 컨텐츠</p>
      <button onClick={closeModal}>닫기</button>
    </Modal>
  </div>
)

export default App;