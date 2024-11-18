import "../css/Card.css";
import { Link, useNavigate } from "react-router-dom";
import { setCookie } from "../../../shared/hook/hook";
import { useState } from "react";

export function Card({
  type = "",
  point = 0,
  emoji = [{}],
  name = "",
  userName = "",
  inProgress = 0,
  children,
  className = "",
  to = "",
  onClick,
}) {
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  const [max1, max2] = [18, 45];
  function textSlice(text = "", maxLength = 0) {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }
  function dayCalculator(date) {
    const today = new Date();
    const createDay = new Date(date);
    const inProgress = today.getDate() - createDay.getDate();
    return inProgress;
  }

  return (
    <div className={`card ${type} ${className}`}>
      <div className={type.includes("bg") ? "cover inner" : "inner"}>
        <button onClick={onClick} className="navigate">
          <div className="top">
            <h3 className="name">
              <span>{userName}</span>의 {textSlice(name, max1)}
            </h3>
            <div className="point">
              <img src="/img/point.png" alt="포인트" />
              <p>
                <span>{point}</span>P 획득
              </p>
            </div>
          </div>
          <p className="inProgress">{dayCalculator(inProgress)}일째 진행 중</p>
          <p className="content">{textSlice(children, max2)}</p>
        </button>
        <div className="emojis">
          {emoji.map((v, index) => {
            return (
              <div className="emoji" key={index}>
                <p className="emojiType">{v.emojiIcon}</p>
                <p>{v.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Cards({ children, noList = "", height = "auto" }) {
  return (
    <div className="cards" style={{ height }}>
      {!!children[0] ? children : <p className="noList">{noList}</p>}
    </div>
  );
}
