import React, { useEffect, useState } from "react";
import "./Header.css";
import TimeDisplay from "./Timedisplay";
import { useNavigate, useParams } from "react-router-dom";
import { getStudyById } from "../../studydetail/api/studyapi";

const Header = ({ studyId }) => {
  const navigate = useNavigate();
  const [studyData, setStudyData] = useState(null); // studyData 저장

  useEffect(() => {
    async function fetchStudyData() {
      try {
        if (!studyId) return; // studyId가 없으면 호출하지 않음
        const data = await getStudyById(studyId); // studyData 가져오기
        setStudyData(data); // state에 저장
      } catch (error) {
        console.error("스터디 데이터 가져오기 실패:", error);
        setStudyData(null); // 에러 처리
      }
    }

    fetchStudyData();
  }, [studyId]); // studyId가 변경될 때마다 호출

  return (
    <header className="header">
      <div className="header-left">
        {/* studyData가 존재하면 nickName과 studyName 표시 */}
        {studyData ? (
          <h1 className="studyname">
            {studyData.nickName}의 {studyData.studyName}
          </h1>
        ) : (
          <h1 className="studyname">로딩 중...</h1>
        )}
        <br />
        <p>현재 시간</p>
        <p className="time">
          <TimeDisplay />
        </p>
      </div>
      <div className="header-right">
        <button className="nav-button" onClick={() => navigate(`/study/${studyId}/focus`)}>
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
