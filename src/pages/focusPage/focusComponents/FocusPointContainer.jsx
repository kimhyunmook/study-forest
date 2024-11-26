import "./FocusPointContainer.css";

function FocusPointContainer({ studyInfo }) {
  const point = studyInfo?.data?.point || 0;

  return (
    <div className="focusPointCon">
      <img
        src={`${process.env.PUBLIC_URL}/img/ic_point.png`}
        alt="pointImg"
        className="focusPointImg"
      />
      <div className="focusPointFont">{point}P 획득</div>
    </div>
  );
}

export default FocusPointContainer;