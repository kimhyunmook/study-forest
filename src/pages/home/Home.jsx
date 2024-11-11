import Cards, { Card } from "../../shared/component/Card";
import Layout, { WhiteContainer } from "../../shared/component/Layout";
import SearchBox from "./components/Search";
import "./home.css";

export default function Home() {
  return (
    <Layout paddingBottom={"174px"}>
      <WhiteContainer
        className=""
        title={"최근 조회한 스터디"}
        titleMargin={"40px"}
        marginBottom="40px"
      >
        <Cards>
          <Card
            type="bg1"
            point={202}
            inProgress={22}
            userName="이유디"
            name="의 UX 스터디"
          >
            Slow And Steady Wins The Race!!
          </Card>
          <Card
            type="green"
            point={202}
            inProgress={22}
            userName="이유디"
            name="의 UX 스터디"
          >
            Slow And Steady Wins The Race!!
          </Card>
          <Card
            type="yellow"
            point={202}
            inProgress={22}
            userName="이유디"
            name="의 UX 스터디"
          >
            Slow And Steady Wins The Race!!
          </Card>
        </Cards>
      </WhiteContainer>
      <WhiteContainer
        className=""
        title={"스터디 둘러보기"}
        titleMargin={"40px"}
      >
        <SearchBox />
        <Cards>
          {["pink", "blue", "bg2", "bg3", "bg4", "green"].map((v, i) => {
            let mbn = "";
            if (i < 3) mbn = "mbn";
            return (
              <Card
                key={i}
                type={v}
                point={202}
                inProgress={1}
                userName="이유디"
                name="의 UX 스터디"
                className={mbn}
              >
                Slow And Steady Wins The Race!!
              </Card>
            );
          })}
          <a href="#" className="moreBtn">
            더보기
          </a>
        </Cards>
      </WhiteContainer>
    </Layout>
  );
}
