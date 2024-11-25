import "./Timer.css";

function Timer({
  timerState,
  timerRef,
  handleEditClick,
  handleInputChange,
  min,
  sec,
}) {
  return (
    <div
      className="timerDiv"
      onClick={handleEditClick}
      ref={timerRef}
      // 10초 남으면 빨간색
      style={{
        // over 이면 회색, 타이머 5분 남았으면 빨강 다 아니면 기본 색
        color:
          timerState === "over"
            ? "#818181"
            : (timerState === "running" || timerState === "pause") && min < 5
              ? "#F50E0E"
              : "#414141",
      }}
    >
      {/* 클릭하면 시간 설정 div 보이기 */}
      {/* isDone이 true면 작동 안함 */}
      {timerState === "editing" ? (
        <div className="editInputDiv">
          <input
            type="number"
            name="min"
            value={min === 0 ? "" : min}
            onChange={handleInputChange}
            className="timerInput"
          />
          :
          <input
            type="number"
            name="sec"
            value={sec === 0 ? "" : sec}
            onChange={handleInputChange}
            className="timerInput"
          />
        </div>
      ) : (
        // 시간 설정 중 아니면 설정된 시간 표시
        // 시간 끝나면 - 붙이기
        `${timerState === "over" ? "-" : ""}${String(min).padStart(
          2,
          "0"
        )}:${String(sec).padStart(2, "0")}`
      )}
    </div>
  );
}

export default Timer;
