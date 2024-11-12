import { CreateButtonModal } from "./CreateButtonModal";
import { useState } from "react";
import { createStudy } from "../api/createStudy";

export function CreateButton({ nickName, studyName, intro, background, password, rePassword }) {
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleClick = async () => {
        if (!nickName || !studyName || !intro || !background || !password || !rePassword) {
            setAlertMessage('모든 필드를 입력해 주세요.');
            setAlertVisible(true);
            return;
        }

        try {
            // response값이 잇을때만 성공모달 띄울예정
            const response = await createStudy({
                nickName,
                studyName,
                intro,
                background,
                password
            });

            setAlertMessage("스터디가 성공적으로 생성되었습니다!");
            setAlertVisible(true);
            setAlertVisible(true);
            //
            setTimeout(() => {
                window.location.href = '/';
            }, 1500);

            //
        } catch (err) {
            setAlertMessage(err.message);
            setAlertVisible(true);
        }
    };

    const handleCloseAlert = () => {
        setAlertVisible(false);
    };

    return (
        <>
            <div className="detail-page-button"
                onClick={handleClick}>
                <img
                    src={`${process.env.PUBLIC_URL}/img/DetailPage_button.png`}
                    alt="button"
                />
            </div>
            <CreateButtonModal
                message={alertMessage}
                isVisible={isAlertVisible}
                onClose={handleCloseAlert}
            />
        </>
    )
}