import { useState } from "react";
import Cards, { Card } from "./components/Card";
import Layout, { WhiteContainer } from "../../shared/component/Layout";
import SearchBox from "./components/Search";
import "./css/home.css";

export default function Home() {
  const [study, setStudy] = useState([{type:'green',point:200,inProgress:33,userName:'test',name:"스터디!"}]);
  const [studyLook, setStudyLook] = useState([]);
  return (
    <Layout paddingBottom={"174px"}>
      <WhiteContainer
        className=""
        title={"최근 조회한 스터디"}
        titleMargin={"40px"}
        marginBottom="40px"
      >
        <Cards noList="아직 조회한 스터디가 없어요" height="229px">
          {studyLook.map((v, i) => {
            return (
              <Card
                type={v.type}
                point={v.point}
                inProgress={v.inProgress}
                userName={v.userName}
                name={v.name}
              >
                {v.content}
              </Card>
            );
          })}
        </Cards>
      </WhiteContainer>
      <WhiteContainer
        className=""
        title={"스터디 둘러보기"}
        titleMargin={"40px"}
      >
        <SearchBox />
        <Cards noList="아직 둘러 볼 스터디가 없어요" height="600px">
          {study.map((v, i) => {
            let mbn = "";
            if (i < 3) mbn = "mbn";
            return (
              <Card
                type={v.type}
                point={v.point}
                inProgress={v.inProgress}
                userName={v.userName}
                name={v.name}
                className={mbn}
              >
                {v.content}
              </Card>
            );
          })}
        </Cards>
        {!!study.length ? (
          <a href="#" className="moreBtn">
            더보기
          </a>
        ) : null}
      </WhiteContainer>
    </Layout>
  );
}
