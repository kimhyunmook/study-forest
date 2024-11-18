import { Link } from "react-router-dom";
import "./FocusTopTitle.css";

function FocusTopTitle() {
  return (
    <div className="focusTopTitle">
      <div className="focusTitleFont">연우의 개발공장</div>
      <div className="focusTopBtCon">
        <Link to="/habit">
          <button type="button" className="focusButtonTop">
            오늘의 습관 ❯
          </button>
        </Link>
        <Link to="/">
          <button type="button" className="focusButtonTop">
            홈 ❯
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FocusTopTitle;
