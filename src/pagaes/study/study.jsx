import React from "react";
import { useState } from "react";

function  studyPage() {
  
  const [password, setPassword] = useState(""); //패스워드

  return (

    <div>
      <header>왼쪽이미지 첨부</header>
      <p></p>
      <div>큰박스
        <div>첫 박스
          <div>이모티콘 박스</div> //이모티콘 API 
          <div>공유하기 \ 수정하기 \ 스터디 삭제하기</div>
        </div>
        <div>두번째 박스
          <div>
            <div>연우의 개발공장</div>
            <div>
              오늘의 습관
              오늘의 집중
            </div>
          </div>
          <p>소개</p>
          <p>Slow And Steady Wins The Race! 다들 오늘 하루도 화이팅 :) </p>
          <p>현재까지 획득한 포인트</p>
          <div>310P 획득</div>
        </div>
        <div>세번째 박스
        <div>습관 기록표</div>
        <div>월 화 수 목 금 토 일</div>
        <div>미라클 모닝</div>
        <div>아침 챙겨먹기</div>
        <div>React 스터디 책 1챕터 읽기</div>
        <div>스트레칭</div>
        <div>사이드 프로젝트</div>
        <div>물 2L 마시기</div>
        </div>

      </div>
      <div>2 컴포넌트 구역</div>
      
    </div>
  )
}

export default studyPage;