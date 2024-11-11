import { Link } from "react-router-dom";
import { Button } from "./Layout";
export default function Header() {
  return (
    <header>
      <div className="gnb">
        <Link to="/">
          <img src="/img/img_logo.svg" alt="로고" />
        </Link>
        <Button to={"/"} width={"254px"} height={"54px"}>
          스터디 만들기
        </Button>
      </div>
    </header>
  );
}
