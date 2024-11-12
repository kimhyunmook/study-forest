import FocusTopTitle from "./focusComponents/FocusTopTitle";
import FocusPointContainer from "./focusComponents/FocusPointContainer";
import FocusTimer from "./focusComponents/FocusTimer";
import "./FocusPage.css";

function FocusPage() {
  return (
    <div className="wrap">
      <div className="focusWrap">
        <div className="focusContainer">
          <div className="focusTop">
            {/* 이름과 버튼이 있는 컴포넌트 */}
            <FocusTopTitle />
            <div className="focusFlexCon">
              <span className="grayFont">현재까지 획득한 포인트</span>
              {/* 포인트를 보여주는 컴포넌트 */}
              <FocusPointContainer />
            </div>
          </div>
          <div className="focusMainWrap">
            <div className="focusMainContainer">
              <div className="focusMainTitle">오늘의 집중</div>
              {/* 타이머 자리 */}
              <FocusTimer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FocusPage;
