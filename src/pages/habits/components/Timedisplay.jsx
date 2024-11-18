import React from "react";
import "./TimeDisplay.css";

const TimeDisplay = () => {
  const currentTime = new Date().toLocaleString("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return <div className="time-display">{currentTime}</div>;
};

export default TimeDisplay;
