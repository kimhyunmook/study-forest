import { useState, useEffect, useRef } from "react";
import "./FocusTimer.css";

function FocusTimer() {
  // min, sec 초기값 설정
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  // 타이머 작동 중인지
  const [isRunning, setIsRunning] = useState(false);
  // 타이머가 00 : 00 이 됐는지
  const [isDone, setIsDone] = useState(false);
  // 타이머 시간 설정 중인지
  const [isEditing, setIsEditing] = useState(false);

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
    }
  };
  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  // 00 : 00 이 있는 div 를 누르면 isEditing true
  const handleEditClick = () => {
    // 타이머가 작동 중이 아니면 실행
    if (!isRunning) {
      setIsEditing(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "min") setMin(parseInt(value) || 0);
    if (name === "sec") setSec(parseInt(value) || 0);
  };

  return (
    <div className="focusTimer">
      <div className="timerDiv" onClick={handleEditClick} ref={timerRef}>
        {isEditing ? (
          <div>
            <input
              type="number"
              name="min"
              value={min}
              onChange={handleInputChange}
              min={0}
              max={59}
              className="timerInput"
            />
            :
            <input
              type="number"
              name="sec"
              value={sec}
              onChange={handleInputChange}
              min={0}
              max={59}
              className="timerInput"
            />
          </div>
        ) : (
          `${String(min).padStart(2, "0")} : ${String(sec).padStart(2, "0")}`
        )}
      </div>
      {/* 타이머 시작 전에는 start 버튼 */}
      {!isRunning ? (
        <div>
          <button type="button" className="timerBt" onClick={handleStart}>
            <div className="timerBtContents">
              <img
                src={`${process.env.PUBLIC_URL}/img/ic_play.png`}
                className="focusStartBt"
              />
              <div>Start!</div>
            </div>
          </button>
        </div>
      ) : (
        <div>
          <button type="button" className="timerBt">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/img/ic_pause.png`}
                className="focusPauseBt"
              />
            </div>
          </button>
          <button type="button" className="timerBt" onClick={handleStart}>
            <div className="timerBtContents">
              <img
                src={`${process.env.PUBLIC_URL}/img/ic_play.png`}
                className="focusStartBt"
              />
              <div>Start!</div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
export default FocusTimer;
