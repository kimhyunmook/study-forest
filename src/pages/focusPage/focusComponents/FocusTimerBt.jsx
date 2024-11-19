import "./FocusTimerBt.css";

function FocusTimerBt({
  isStart,
  timerState,
  handleStart,
  handleRestart,
  handleStop,
  handleDone,
}) {
  return (
    <div className="timerBtCon">
      {/* 정지 버튼 */}
      {isStart && timerState !== "over" ? (
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
          timerState === "running" ? "timerStartBt running" : "timerStartBt "
        }
        // 시간 끝나면 핸들러 바꾸기
        onClick={timerState !== "over" ? handleStart : handleDone}
      >
        <div className="timerBtContents">
          <img
            src={
              // 시간이 끝나면 isDone = true
              timerState !== "over"
                ? `${process.env.PUBLIC_URL}/img/ic_play.png`
                : `${process.env.PUBLIC_URL}/img/ic_pause_end.png`
            }
            className="focusStartBtImg"
            alt="startImg"
          />
          {/* 시간 끝나면 start -> stop 변경 */}
          {timerState === "over" ? <div>Stop!</div> : <div>Start!</div>}
        </div>
      </button>

      {/* 재시작 버튼 */}
      {isStart && timerState !== "over" ? (
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
  );
}

export default FocusTimerBt;
