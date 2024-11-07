import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="gnb">
        <Link to="/">
          <img src="/img/img_logo.svg" alt="로고" />
        </Link>
        <Link to="/" className="jejodo studyCreateBtn">
          스터디 만들기
        </Link>
      </div>
    </header>
  );
}
