import { CreateButtonModal } from "./CreateButtonModal";
import { useState } from "react";
import { createStudy } from "../api/createStudy";
import { Button } from "../../../shared/components/Layout";

export function CreateButton({
  nickName,
  studyName,
  introduce,
  background,
  password,
  rePassword,
}) {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleClick = async () => {
    if (
      !nickName ||
      !studyName ||
      !introduce ||
      !background ||
      !password ||
      !rePassword
    ) {
      setAlertMessage('모든 필드를 입력해 주세요.');
      setAlertVisible(true);
      return;
    }

    if (
      (password !== rePassword) ||
      ((password.length < 8))
    ) {
      setAlertMessage('패스워드를 확인해주세요.');
      setAlertVisible(true);
      return;
    }

    try {
      // response값이 잇을때만 성공모달 띄울예정
      const response = await createStudy({
        nickName,
        studyName,
        introduce,
        background,
        password
      });

      if (response) {
        setAlertMessage("스터디가 성공적으로 생성되었습니다!");
        setAlertVisible(true);
      }
      //
    } catch (err) {
      setAlertMessage(err.message);
      setAlertVisible(true);
    }
  };

  const handleCloseAlert = () => {
    setAlertVisible(false);
    if (alertMessage === "스터디가 성공적으로 생성되었습니다!") {
      window.location.href = '/';
    }
  };

  return (
    <>
      {/* 만들기 버튼 누르면 데이터 전송 */}
      <div className="detail-page-button"
        onClick={handleClick}>
        <Button style={{ marginTop: "40px" }} height="55px">
          만들기
        </Button>
        {/* <img
          src={`${process.env.PUBLIC_URL}/img/DetailPage_button.png`}
          alt="button"
        /> */}
      </div>
      {/* 모달창 컴포넌트  / 모든 input값이 비워져있을때, 패스워드 오류, study 만들어졌을때 3가지 알림창 뜨게 설정 */}
      <CreateButtonModal
        message={alertMessage}
        isVisible={isAlertVisible}
        onClose={handleCloseAlert}
      />
    </>
  )
}
