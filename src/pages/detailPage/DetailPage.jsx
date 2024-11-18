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
  const [introduce, setIntroduce] = useState(""); // 소개
  const [password, setPassword] = useState(""); //패스워드
  const [rePassword, setRePassword] = useState(""); //패스워드 확인

  const [isTouched, setIsTouched] = useState(false); // 스터디 input에 focus되어있는지 체크
  const [background, setBackground] = useState(); //배경사진

  //패스워드 type변경
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); //비밀번호 
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(false); //비밀번호 확인

  //비밀번호 타입변경
  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  //비밀번호확인 타입변경 
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
        <IntroInput introduce={introduce} setIntroduce={setIntroduce} />
        <BackgroundImageSelect background={background} setBackground={setBackground} />
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
        <CreateButton
          nickName={nickName}
          studyName={studyName}
          introduce={introduce}
          background={background}
          password={password}
          rePassword={rePassword}
        />
      </div>
    </div>
  );
}

export default DetailPage;
