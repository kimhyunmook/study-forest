import React from "react";
import { useState } from "react";

function  studyPage() {
  
  

  return (

    <div>
      <header>왼쪽이모티콘 첨부???</header>
      <p></p>
      <div classname="study-page-contain">큰박스
        <div>첫 박스
          <div className="emote-box">이모티콘 박스</div> //이모티콘 API 
          <div>
            <button className="share-fix-font">공유하기</button>
            <button className="share-fix-font">수정하기</button>
            <button className="study-delete-font">스터디 삭제하기</button>
            </div>
        </div>
        <div className="introduce-box">두번째 박스
          <div>
            <div className="UserName">연우의 개발공장</div>
            <div>
              <button className="today-box">오늘의 습관</button>
              <button className="today-box">오늘의 집중</button> 
            </div>
          </div>
          <p>소개</p>
          <p>오늘하루도 화이팅:) </p>
          <p className="now-point">현재까지 획득한 포인트</p>
          <div>310P 획득??? / 포인트 획득 API? </div>
        </div>
        <div className="habbit-box">세번째 박스
          <div className="habit-record-box">습관 기록표</div>
          <div className="third-box-font">월 화 수 목 금 토 일</div>
          <div className="third-box-font">미라클 모닝</div>
          <div className="third-box-font">아침 챙겨먹기</div>
          <div className="third-box-font">React 스터디 책 1챕터 읽기</div>
          <div className="third-box-font">스트레칭</div>
          <div className="third-box-font">사이드 프로젝트</div>
          <div className="third-box-font">물 2L 마시기</div>
        </div>

/*연우의 개발공장 팝업창*/
      </div>
      <div>
        <div>연우의 개발공장</div>
        <div>나가기</div>
      </div>
      <div>권한이 필요해요!</div>
      <div>비밀번호 input</div>
      <a>수정하러가기 이미지</a>

      
      
    </div>
  )
}

export default studyPage;

