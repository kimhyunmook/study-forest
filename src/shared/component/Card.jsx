import "../css/Card.css";
export function Card({
  type = "",
  point = 0,
  emogi = [{ type: "", value: 0 }],
  name = "",
  userName = "",
  inProgress = 0,
  children,
  className = "",
}) {
  return (
    <div className={`card ${type} ${className}`}>
      <div className={type.includes("bg") ? "cover inner" : "inner"}>
        <div className="top">
          <h3 className="name">
            <span>{userName}</span>
            {name}
          </h3>
          <div className="point">
            <img src="/img/point.png" alt="포인트" />
            <p>
              <span>{point}</span>P 획득
            </p>
          </div>
        </div>
        <p className="inProgress">{inProgress}일째 진행 중</p>
        <p className="content">{children}</p>
        <div className="emogis">
          {emogi.map((v, index) => {
            return (
              <div className="emogi" key={index}>
                <p className="emogiType">
                  <img src="/img/point.png" alt={v.type} />
                  {}
                </p>
                <p>{v.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Cards({ children }) {
  return <div className="cards">{children}</div>;
}
