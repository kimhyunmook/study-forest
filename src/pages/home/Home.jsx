import { useEffect, useState } from "react";
import Cards, { Card } from "./components/Card";
import Layout, { WhiteContainer } from "../../shared/components/Layout";
import SearchBox from "./components/Search";
import "./css/home.css";
import { getLatestStudyApi, getStudyListApi } from "./api/homeApi";
import { setCookie } from "../../shared/hook/hook";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [study, setStudy] = useState([]);
  const [studyLook, setStudyLook] = useState([]);
  const [cok, setCok] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [orderBy, setOrderBy] = useState("desc"); //asc
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getStudyListApi(page, pageSize, orderBy, keyword).then((res) => {
      setStudy([...res.data]);
    });
  }, [pageSize, orderBy]);

  const moreBtnHandle = (e) => {
    e.preventDefault();
    setPageSize(pageSize + 6);
  };
  const searchHandle = (e) => e.preventDefault();
  const latest = setCookie("get", {
    cookieName: "studyLook",
  });

  useEffect(() => {
    setCok([...latest]);
  }, []);
  useEffect(() => {
    let body = {
      id: [...latest].reverse(),
    };
    getLatestStudyApi(body).then((res) => {
      setStudyLook([...res.data]);
    });
  }, [cok]);

  return (
    <Layout paddingBottom={"174px"} paddingTop={"40px"} width={"1200px"}>
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
                key={i}
                type={v.background}
                point={v.point}
                emoji={v.emojis}
                inProgress={v.createdAt}
                userName={v.nickName}
                name={v.studyName}
                to={v.id}
              >
                {v.introduce}
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
        <SearchBox
          selectValue={setOrderBy}
          inputValue={setKeyword}
          searchHandle={searchHandle}
        />
        <Cards
          noList="아직 둘러 볼 스터디가 없어요"
          height={!!!study.length ? "600px" : "auto"}
        >
          {study.map((v, i) => {
            function details(e) {
              e.preventDefault();
              e.stopPropagation();
              const cookieName = "studyLook";
              let newArr = [...cok, v.id];
              setCok(newArr);
              setCookie("create", {
                cookieName,
                cookieValue: newArr,
                end: 1,
              });

              setTimeout(() => {
                navigate(`/study/${v.id}`);
              }, 500);
            }
            let mbn = "";
            if (i < study.length - 3) mbn = "mbn";
            return (
              <Card
                to={v.id}
                onClick={details}
                key={i}
                type={v.background}
                point={v.point}
                emoji={v.emojis}
                inProgress={v.createdAt}
                userName={v.nickName}
                name={v.studyName}
                className={mbn}
              >
                {v.introduce}
              </Card>
            );
          })}
        </Cards>
        {!!study.length ? (
          <a href="#" onClick={moreBtnHandle} className="moreBtn">
            더보기
          </a>
        ) : null}
      </WhiteContainer>
    </Layout>
  );
}
