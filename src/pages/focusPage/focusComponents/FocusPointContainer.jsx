import "./FocusPointContainer.css";

function FocusPointContainer() {
  return (
    <div className="focusPointCon">
      <img
        src={`${process.env.PUBLIC_URL}/img/ic_point.png`}
        art="pointImg"
        className="focusPointImg"
      />
      <div className="focusPointFont">310P 획득</div>
    </div>
  );
}
export default FocusPointContainer;
