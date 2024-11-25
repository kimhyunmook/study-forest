import "./css/DetailPage.css";
import { useState, useEffect } from "react";
import { NickNameInput } from "./components/NickNameInput";
import { StudyNameInput } from "./components/StudyNameInput";
import { IntroInput } from "./components/IntroInput";
import { BackgroundImageSelect } from "./components/BackgroundImageSelect";
import { PasswordInput } from "./components/PasswordInput";
import { EditButton } from "./components/EditButton";
import Layout from "../../shared/components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { getStudyById } from "../studydetail/api/studyapi";

function EditPage() {
  const { id } = useParams(); // URL에서 id 추출
  const navigate = useNavigate();

  const [nickName, setNickName] = useState(""); //닉네임
  const [studyName, setStudyName] = useState(""); //스터디 이름
  const [introduce, setIntroduce] = useState(""); // 소개
  const [password, setPassword] = useState(""); //패스워드
  const [rePassword, setRePassword] = useState(""); //패스워드 확인

  const [isTouched, setIsTouched] = useState(false); // 스터디 input에 focus되어있는지 체크
  const [background, setBackground] = useState(); //배경사진

  //패스워드 type변경
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); //비밀번호
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] =
    useState(false); //비밀번호 확인


  const fetchStudyData = async () => {
    try {
      const data = await getStudyById(id);
      setNickName(data.nickName);
      setStudyName(data.studyName);
      setIntroduce(data.introduce);
      setBackground(data.background);
      setPassword(data.password);
      setRePassword(data.password); // 비밀번호 확인도 동일한 값으로 설정
    } catch (error) {
      console.error("스터디 데이터 불러오기 실패:", error);
    }
  };

  //비밀번호 타입변경
  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  //비밀번호확인 타입변경
  const handlePasswordConfirmToggle = () => {
    setIsPasswordConfirmVisible(!isPasswordConfirmVisible);
  };

  useEffect(() => {
    fetchStudyData();
  }, [id]);

  return (
    <Layout paddingBottom={"100px"}>
      <div className="detail-page-contain">
        <div className="detail-page-title">스터디 수정하기</div>
        <div className="detail-page-main">
          <NickNameInput nickName={nickName} setNickName={setNickName} />
          <StudyNameInput
            studyName={studyName}
            setStudyName={setStudyName}
            isTouched={isTouched}
            setIsTouched={setIsTouched}
          />
          <IntroInput introduce={introduce} setIntroduce={setIntroduce} />
          <BackgroundImageSelect
            background={background}
            setBackground={setBackground}
          />
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
          <EditButton
            id={id}
            nickName={nickName}
            studyName={studyName}
            introduce={introduce}
            background={background}
            password={password}
            rePassword={rePassword}
          />
        </div>
      </div>
    </Layout>
  );
}

export default EditPage;
