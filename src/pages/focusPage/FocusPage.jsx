import FocusTopTitle from "./focusComponents/FocusTopTitle";
import FocusPointContainer from "./focusComponents/FocusPointContainer";
import TodayFocus from "./focusComponents/TodayFocus";
import "./FocusPage.css";
import { useEffect, useState } from "react";
import Layout from "../../shared/components/Layout";
import { getStudyInfo, updateStudyPoint } from "./api/focusApi";
import { useParams } from "react-router-dom";

function FocusPage() {
  // 타이머 상태
  const [timerState, setTimerState] = useState(""); // running, pause, over, editing, done
  // 초기 설정 시간
  const [initialMin, setInitialMin] = useState(0);
  const [initialSec, setInitialSec] = useState(0);
  // 스터디 정보
  const [studyInfo, setStudyInfo] = useState({});
  // 점수 업데이트 여부
  const [isUpdated, setIsUpdated] = useState(false);
  //id
  const { id } = useParams();

  // 점수 계산
  const newPoint = Math.floor((initialMin * 60 + initialSec) / 600 + 3);

  useEffect(() => {
    const axiosStudyInfo = async () => {
      console.log("Fetching study info for ID:", id);
      const info = await getStudyInfo(id);
      console.log("Fetched Study Info:", info);
      setStudyInfo(info);
    };
    axiosStudyInfo();
  }, [id]);

  useEffect(() => {
    // timerState가 "done"이 될 때 점수 업데이트
    if (timerState === "done" && !isUpdated) {
      const updatedPoint = studyInfo.point + newPoint;

      const updatePoint = async () => {
        // 서버에 점수 업데이트 요청
        await updateStudyPoint({ id, updatedPoint });
        // 상태 업데이트로 화면에 반영
        setStudyInfo((prev) => ({ ...prev, point: updatedPoint }));
        setIsUpdated(true);
      };

      updatePoint();
    }
  }, [timerState, isUpdated, studyInfo, id, newPoint]);

  useEffect(() => {
    if (timerState !== "done") {
      setIsUpdated(false);
    }
  }, [timerState]);

  return (
    <Layout paddingBottom={"100px"}>
      <div className="wrap">
        <div className="focusWrap">
          <div className="focusContainer">
            <div className="focusTop">
              {/* 이름과 버튼이 있는 컴포넌트 */}
              <FocusTopTitle studyInfo={studyInfo} />
              <div className="focusFlexCon">
                <span className="grayFont">현재까지 획득한 포인트</span>
                {/* 포인트를 보여주는 컴포넌트 */}
                <FocusPointContainer studyInfo={studyInfo} />
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
            <div> 🎉 {newPoint}포인트 획득.</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Layout>
  );
}

export default FocusPage;
