import { Link, useLocation } from "react-router-dom";
import { Button } from "./Layout";
export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isDetailPage = location.pathname === "/detail";
  return (
    <header>
      <div className="gnb">
        <Link to="/">
          <img src="/img/img_logo.svg" alt="로고" />
        </Link>
        {isHomePage || isDetailPage ? (
          <Button to={"/detail"} width={"254px"} height={"50px"}>
            스터디 만들기
          </Button>
        ) : (
          <div></div>
        )}
      </div>
    </header>
  );
}
