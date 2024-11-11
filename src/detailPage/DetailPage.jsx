import "./css/DetailPage.css";
import { useState } from "react";
import { NickNameInput } from "./components/NickNameInput";
import { StudyNameInput } from "./components/StudyNameInput";
import { IntroInput } from "./components/IntroInput";
import { BackgroundImageSelect } from "./components/BackgroundImageSelect";
import { PasswordInput } from "./components/PasswordInput";
import { CreateButton } from "./components/CreateButton";


function DetailPage() {
  const [nickName, setNickName] = useState(""); //닉네임
  const [studyName, setStudyName] = useState(""); //스터디 이름
  const [intro, setIntro] = useState(""); // 소개
  const [password, setPassword] = useState(""); //패스워드
  const [rePassword, setRePassword] = useState(""); //패스워드 확인

  const [isTouched, setIsTouched] = useState(false);
  const [imgChoice, setImgChoice] = useState();

  //패스워드 type변경
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(false);

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handlePasswordConfirmToggle = () => {
    setIsPasswordConfirmVisible(!isPasswordConfirmVisible);
  };

  return (
    <div className="detail-page-contain">
      <div className="detail-page-title">스터디 만들기</div>
      <div className="detail-page-main">

        <NickNameInput nickName={nickName} setNickName={setNickName} />
        <StudyNameInput
          studyName={studyName}
          setStudyName={setStudyName}
          isTouched={isTouched}
          setIsTouched={setIsTouched}
        />
        <IntroInput intro={intro} setIntro={setIntro} />
        <BackgroundImageSelect imgChoice={imgChoice} setImgChoice={setImgChoice} />
        <PasswordInput
          password={password}
          setPassword={setPassword}

          rePassword={rePassword}
          setRePassword={setRePassword}

          isPasswordVisible={isPasswordVisible}
          isPasswordConfirmVisible={isPasswordConfirmVisible}

          handlePasswordToggle={handlePasswordToggle}
          handlePasswordConfirmToggle={handlePasswordConfirmToggle}
        />
        <CreateButton />
      </div>
    </div>
  );
}

export default DetailPage;
