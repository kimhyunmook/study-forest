import InitialTimer from "./InitialTimer";
import Timer from "./Timer";
import FocusTimerBt from "./FocusTimerBt";
import { useState, useEffect, useRef } from "react";
import "./TodayFocus.css";

function TodayFocus({
  timerState,
  setTimerState,
  initialMin,
  setInitialMin,
  initialSec,
  setInitialSec,
}) {
  // 타이머 min, sec 설정
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  // 타이머 시작했는지
  const [isStart, setIsStart] = useState(false);

  // 시간 설정 중 타이머 바깥 클릭하면 설정 나가기 ref
  const timerRef = useRef(null);

  // 시간 설정 중일 때 작동 바깥 클릭하면 설정 종료
  useEffect(() => {
    if (timerState === "editing") {
      // timerRef 가 랜더링 되어있고 클릭한 요소가 바깥이면 false 세팅 함수
      const handleClickOutside = (e) => {
        if (timerRef.current && !timerRef.current.contains(e.target)) {
          setTimerState("");
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [timerState, setTimerState]);

  // 타이머 작동 이펙트 타이머 끝나면 state = over
  useEffect(() => {
    if (timerState === "running") {
      const timer = setInterval(() => {
        if (sec > 0) {
          setSec((prev) => prev - 1);
        } else if (min > 0 && sec === 0) {
          setMin((prev) => prev - 1);
          setSec(59);
        } else {
          setTimerState("over");
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timerState, setTimerState, min, sec]);

  // 타이머가 끝났을 때(state = over) 실행
  useEffect(() => {
    if (timerState === "over") {
      const overTimer = setInterval(() => {
        if (sec < 59) {
          setSec((prev) => prev + 1);
        } else if (sec === 59) {
          setMin((prev) => prev + 1);
          setSec(0);
        }
      }, 1000);
      return () => clearInterval(overTimer);
    }
  }, [timerState, min, sec]);

  ///////////////////////////// TimerBt 클릭 함수 ////////////////////////////

  // start 버튼 누르면 isStart=true, timerState= false로 설정하고 타이머가 작동
  const handleStart = () => {
    if (min > 0 || sec > 0) {
      setIsStart(true);
      setTimerState("running");
    }
  };

  // 정지 버튼 함수
  const handleStop = () => {
    if (timerState === "running") {
      setTimerState("pause");
    }
  };
  // 재시작 버튼 함수
  const handleRestart = () => {
    setMin(initialMin);
    setSec(initialSec);
    setIsStart(false);
    setTimerState("");
  };

  // 타이머 끝내기 버튼 함수
  const handleDone = () => {
    setMin(initialMin);
    setSec(initialSec);
    setIsStart(false);
    setTimerState("done");
  };
  ///////////////////////////////// Timer 설정 함수/////////////////////////////

  // 시간 설정할 때 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const newValue = Math.max(
      // 값이 0보다 작아지지 않도록
      0,
      Math.min(parseInt(value) || 0, name === "min" ? 1440 : 59) // 설정 시간이 1440 : 59(24시간)를 넘어가지 않도록
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

  // 00 : 00 이 있는 div 를 누르면 editing
  const handleEditClick = () => {
    // 타이머 시작 전에 만 실행
    if (!isStart) {
      setTimerState("editing");
    }
  };
  //////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="focusMainContainer">
      <div className="focusMainTitle">
        <div>오늘의 집중</div>
        {!isStart ? (
          <div className="timerDescription">
            타이머를 클릭하여 시간을 설정해주세요!
          </div>
        ) : (
          <div></div>
        )}
        {isStart ? (
          <InitialTimer initialMin={initialMin} initialSec={initialSec} />
        ) : (
          <div></div>
        )}
      </div>
      <div className="focusTimer">
        {/* 타이머 자리 */}
        <Timer
          timerRef={timerRef}
          timerState={timerState}
          isStart={isStart}
          handleEditClick={handleEditClick}
          handleInputChange={handleInputChange}
          min={min}
          sec={sec}
        />

        {/* 버튼 자리 */}
        <FocusTimerBt
          isStart={isStart}
          timerState={timerState}
          handleStart={handleStart}
          handleRestart={handleRestart}
          handleStop={handleStop}
          handleDone={handleDone}
        />
      </div>
    </div>
  );
}

export default TodayFocus;
