import React, { useEffect, useState } from "react";
import "./Header.css";
import TimeDisplay from "./Timedisplay";
import { useNavigate } from "react-router-dom";
import { getNickNameById } from "../api/habitsApi"; // 수정된 API 호출 함수 import

const Header = () => {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState("로딩 중...");
  const studyId = "1"; // 스터디 ID (실제 값을 여기에 설정)

  useEffect(() => {
    async function fetchNickName() {
      try {
        const nickNameData = await getNickNameById(studyId); // API 호출
        setNickName(nickNameData || "닉네임 없음"); // 닉네임 상태 업데이트
      } catch (error) {
        console.error("닉네임 가져오기 실패:", error);
        setNickName("오류 발생");
      }
    }

    fetchNickName();
  }, [studyId]); // studyId가 변경되면 다시 호출

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="studyname">{nickName}</h1> {/* 닉네임 표시 */}
        <br />
        <p>현재 시간</p>
        <p className="time">
          <TimeDisplay />
        </p>
      </div>
      <div className="header-right">
        <button className="nav-button" onClick={() => navigate("/focuspage")}>
          오늘의 집중 &gt;
        </button>
        <button className="nav-button" onClick={() => navigate("/")}>
          홈 &gt;
        </button>
      </div>
    </header>
  );
};

export default Header;
