import { useState, useEffect, useRef } from "react";
import "./FocusTimer.css";

function FocusTimer() {
  // 초기 설정 시간
  const [initialMin, setInitialMin] = useState(0);
  const [initialSec, setInitialSec] = useState(0);
  // 타이머 min, sec 초기값 설정
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  // 타이머 작동 중인지
  const [isRunning, setIsRunning] = useState(false);
  // 타이머가 00 : 00 이 됐는지
  const [isDone, setIsDone] = useState(false);
  // 타이머 시간 설정 중인지
  const [isEditing, setIsEditing] = useState(false);
  // 타이머 시작하고 사이트 버튼 활성화
  const [isSideBt, setIsSideBt] = useState(false);

  // 시간 설정 중 타이머 바깥 클릭하면 설정 나가기 ref
  const timerRef = useRef(null);

  // timerRef 가 랜더링 되어있고 클릭한 요소가 바깥이면 false 세팅 함수
  const handleClickOutside = (e) => {
    if (timerRef.current && !timerRef.current.contains(e.target)) {
      setIsEditing(false);
    }
  };
  // 시간 설정 중일 때 작동
  useEffect(() => {
    if (isEditing) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isEditing]);

  //타이머 작동 이펙트
  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (sec > 0) {
          setSec((prev) => prev - 1);
        } else if (min > 0 && sec === 0) {
          setMin((prev) => prev - 1);
          setSec(59);
        } else {
          setIsRunning(false);
          setIsDone(true);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, min, sec]);

  // 타이머가 끝났을 때 실행
  useEffect(() => {
    if (isDone) {
      const overTimer = setInterval(() => {});
    }
  }, [min, sec]);

  // start 버튼 누르면 isRunning을 true, isEditing을 false로 설정하고 타이머가 작동
  const handleStart = () => {
    if (min > 0 || sec > 0) {
      setIsRunning(true);
      setIsEditing(false);
      setIsSideBt(true);
    }
  };

  // 정지 버튼 함수
  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  // 재시작 버튼 함수
  const handleRestart = () => {
    setMin(initialMin);
    setSec(initialSec);
    setIsRunning(false);
    setIsSideBt(false);
  };

  // 타이머 끝내기 버튼 함수
  const handleDone = () => {
    handleRestart();
    setIsDone(false);
  };

  // 00 : 00 이 있는 div 를 누르면 isEditing true
  const handleEditClick = () => {
    // 타이머가 작동 중이 아니면 실행
    if (!isRunning) {
      setIsEditing(true);
    }
  };

  // 시간 설정할 때 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const newValue = Math.max(
      // 값이 0보다 작아지지 않도록
      0,
      Math.min(parseInt(value) || 0, name === "min" ? 1440 : 59) // 설정 시간이 1440 : 59를 넘어가지 않도록
    ); // min 및 max 범위 제한

    if (name === "min") {
      setMin(newValue || 0);
      setInitialMin(newValue || 0);
    }
    if (name === "sec") {
      setSec(newValue || 0);
      setInitialSec(newValue || 0);
    }
  };

  return (
    <div className="focusTimer">
      {/* 시간 설정 && 표시 */}
      <div
        className="timerDiv"
        onClick={handleEditClick}
        ref={timerRef}
        // 10초 남으면 빨간색
        style={{
          color: isRunning && min === 0 && sec <= 10 ? "#F50E0E" : "#414141",
        }}
      >
        {/* 클릭하면 시간 설정 div 보이기 */}
        {isEditing ? (
          <div>
            <input
              type="number"
              name="min"
              value={isEditing && min === 0 ? "" : min}
              onChange={handleInputChange}
              className="timerInput"
            />
            :
            <input
              type="number"
              name="sec"
              value={isEditing && sec === 0 ? "" : sec}
              onChange={handleInputChange}
              className="timerInput"
            />
          </div>
        ) : (
          // 시간 설정 중 아니면 설정된 시간 표시
          `${String(min).padStart(2, "0")} : ${String(sec).padStart(2, "0")}`
        )}
      </div>

      <div className="timerBtCon">
        {/* 정지 버튼 */}
        {isSideBt && !isDone ? (
          <button
            type="button"
            className="timerSideBt pause"
            onClick={handleStop}
          >
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/img/ic_pause.png`}
                className="focusPauseBtImg"
                alt="pauseImg"
              />
            </div>
          </button>
        ) : (
          <div></div>
        )}

        {/* 시작 버튼 */}
        <button
          type="button"
          className={
            !isRunning ? "timerStartBt" : "timerStartBt runningStartBt"
          }
          // 시간 끝나면 핸들러 바꾸기
          onClick={!isDone ? handleStart : handleDone}
        >
          <div className="timerBtContents">
            <img
              src={
                // 시간이 끝나면 isDone = true
                !isDone
                  ? `${process.env.PUBLIC_URL}/img/ic_play.png`
                  : `${process.env.PUBLIC_URL}/img/ic_pause_end.png`
              }
              className="focusStartBtImg"
              alt="startImg"
            />
            {/* 시간 끝나면 start -> stop 변경 */}
            {!isDone ? <div>Start!</div> : <div>Stop!</div>}
          </div>
        </button>

        {/* 재시작 버튼 */}
        {isSideBt && !isDone ? (
          <button
            type="button"
            className="timerSideBt restart"
            onClick={handleRestart}
          >
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/img/ic_restart.png`}
                className="focusPauseBtImg"
                alt="pauseImg"
              />
            </div>
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default FocusTimer;
