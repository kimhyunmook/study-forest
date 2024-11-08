import "../css/Card.css";
export function Card({
  bg = "",
  point = 0,
  emogi = [{ type: "", value: 0 }],
  name = "",
  inProgress = 0,
  children,
}) {
  return (
    <div className="card" style={{ background: bg }}>
      <div className="top">
        <h3 className="name">{name}</h3>
        <div className="point">
          <img src="/img/point.png" alt="포인트" />
          {point}P 획득
        </div>
      </div>
      <p className="inProgress">{inProgress}일째 진행 중</p>
      <p className="content">{children}</p>
      {emogi.map((v, index) => {
        return (
          <div className="emogi" key={index}>
            <img src="/img/point.png" alt={v.type} />
            <p>{v.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function Cards({ children }) {
  return <div className="cards">{children}</div>;
}
