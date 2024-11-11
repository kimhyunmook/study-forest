import { useChange } from "../../../shared/hook/hook";

export default function SearchBox() {
  const search = useChange("");
  const orderBy = useChange("recent");
  return (
    <div className="searchArea">
      <div className="inputBox">
        <a href="#">
          <img src="/img/ic_search.svg" alt="검색" />
        </a>
        <input
          type="text"
          value={search.value}
          onChange={search.onChange}
          placeholder="검색"
        />
      </div>
      <select className="orderBy" onChange={orderBy.onChange}>
        <option value="recent">최신순</option>
        <option value="old">오래된 순</option>
        <option value="manyPoint">많은 포인트 순</option>
        <option value="littlePoint">적은 포인트 순</option>
      </select>
    </div>
  );
}
