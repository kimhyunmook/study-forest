import "./FocusTopTitle.css";

function FocusTopTitle() {
  return (
    <div className="focusTopTitle">
      <div className="focusTitleFont">연우의 개발공장</div>
      <div className="focusTopBtCon">
        <button type="button" className="focusButtonTop">
          오늘의 습관 ❯
        </button>
        <button type="button" className="focusButtonTop">
          홈 ❯
        </button>
      </div>
    </div>
  );
}

export default FocusTopTitle;
