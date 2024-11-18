import FocusTopTitle from "./focusComponents/FocusTopTitle";
import FocusPointContainer from "./focusComponents/FocusPointContainer";
import TodayFocus from "./focusComponents/TodayFocus";
import "./FocusPage.css";
import { useState } from "react";
import Layout from "../../shared/components/Layout";

function FocusPage() {
  // 타이머 상태
  const [timerState, setTimerState] = useState(""); // running, pause, over, editing, done
  // 초기 설정 시간
  const [initialMin, setInitialMin] = useState(0);
  const [initialSec, setInitialSec] = useState(0);

  const point = Math.floor((initialMin * 60 + initialSec) / 600 + 3);

  return (
    <Layout paddingBottom={"100px"}>
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
              <TodayFocus
                timerState={timerState}
                setTimerState={setTimerState}
                initialMin={initialMin}
                setInitialMin={setInitialMin}
                initialSec={initialSec}
                setInitialSec={setInitialSec}
              />
            </div>
          </div>
        </div>
        {timerState === "pause" ? (
          <div className="focusMessage pauseMessage">
            <div> 🚨 집중이 중단되었습니다.</div>
          </div>
        ) : timerState === "done" ? (
          <div className="focusMessage doneMessage">
            <div> 🎉 {point}포인트 획득.</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Layout>
  );
}

export default FocusPage;
