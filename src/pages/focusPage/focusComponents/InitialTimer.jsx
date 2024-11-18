import "./InitialTimer.css";

function InitialTimer({ initialMin, initialSec }) {
  return (
    <div className="InitialTimerBox">
      <div className="InitialTimerCon">
        <img
          src={`${process.env.PUBLIC_URL}/img/timerIcon.png`}
          className="timerIcon"
          alt="timerIcon"
        />
        <div>
          {String(initialMin).padStart(2, "0")} :
          {String(initialSec).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}

export default InitialTimer;
