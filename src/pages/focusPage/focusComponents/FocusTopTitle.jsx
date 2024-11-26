import { Link } from "react-router-dom";

import "./FocusTopTitle.css";

function FocusTopTitle({ studyInfo, id }) {
  // ?. -> 없으면 undefined -> 로딩중
  const nickName = studyInfo.data?.nickName || "로딩 중...";
  const studyName = studyInfo.data?.studyName || "로딩 중...";

  return (
    <div className="focusTopTitle">
      <div className="focusTitleFont">{`${nickName}의 ${studyName}`}</div>
      <div className="focusTopBtCon">
        <Link to={`/study/${id}/todayhabits`}>
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
