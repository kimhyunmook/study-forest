import { useState } from "react";

export const StuModal = ({ studyName, password, isVisible, onClose, onSubmit, actionType }) => {
  const [inputPassword, setInputPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordChange = (e) => {
    setInputPassword(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputPassword); // 입력된 비밀번호를 부모 컴포넌트로 전달
    setInputPassword(""); // 입력 필드 초기화
  };

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleClose = () => {
    onClose();
  };


  if (!isVisible) return null;

  return (
    <div className="modal-overlay1">
      <div className="modal-content1">
        <div className="close-button" onClick={handleClose}>나가기</div>
        <div className="modal-text1">{studyName}</div>
        <div className="modal-text2">권한이 필요해요 ! </div>
        <div style={{ position: "relative" }}>
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="detail-page-studyName-input"
            value={inputPassword}
            onChange={handlePasswordChange}
            placeholder="비밀번호를 입력해 주세요."
          />
          <span
            className="detail-page-password-typeChange-icon"
            onClick={handlePasswordToggle}
          >
            <img
              src={
                isPasswordVisible
                  ? `${process.env.PUBLIC_URL}/img/passwordIcon2.svg`
                  : `${process.env.PUBLIC_URL}/img/passwordIcon1.svg`
              }
              alt="passwordChangeIcon"
              className="password-icon1"
            />
          </span>
        </div>
        <button onClick={handleSubmit}>
          {actionType === "edit" ? "수정하러 가기" : "삭제하기"}</button>
      </div>
    </div>
  );
};
