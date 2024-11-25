import { EditButtonModal } from "./EditButtonModal";
import { useState } from "react";
import { EditStudy } from "../api/EditStudy";
import { Button } from "../../../shared/components/Layout";
import { useParams, useNavigate } from "react-router-dom";

export function EditButton({

  id,
  nickName,
  studyName,
  introduce,
  background,
  password,
  rePassword,
}) {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

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
      const response = await EditStudy({
        id,
        nickName,
        studyName,
        introduce,
        background,
        password
      });

      if (response) {
        setAlertMessage("스터디 수정이 완료되었습니다!");
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
    if (alertMessage === "스터디 수정이 완료되었습니다!") {
      navigate(`/study/${id}`);
    }
  };

  return (
    <>
      <div className="detail-page-button"
        onClick={handleClick}>
        <Button style={{ marginTop: "40px" }} height="55px">
          수정하기
        </Button>
      </div>
      <EditButtonModal
        message={alertMessage}
        isVisible={isAlertVisible}
        onClose={handleCloseAlert}
      />
    </>
  )
}
