import { useRef } from "react";

export default function SearchBox({ selectValue, inputValue, searchHandle }) {
  const ic_search = useRef(null);
  function selectHandle(e) {
    selectValue(e.target.value);
  }
  function inputHandle(e) {
    inputValue(e.target.value);
  }
  function focus(e) {
    e.preventDefault();
    ic_search.current.classList.add("on");
  }
  function blur(e) {
    e.preventDefault();
    setTimeout(() => {
      ic_search.current.classList.remove("on");
    }, 500);
  }

  return (
    <div className="searchArea">
      <div className="inputBox">
        <div className="icSearch" ref={ic_search}>
          <label htmlFor="searchBar" onClick={searchHandle}>
            <img src="/img/ic_search.svg" alt="검색" />
          </label>
        </div>
        <input
          name="searchBar"
          type="text"
          onChange={inputHandle}
          onFocus={focus}
          onBlur={blur}
          placeholder="검색"
        />
      </div>
      <select className="orderBy" onChange={selectHandle}>
        <option value="desc">최신순</option>
        <option value="asc">오래된 순</option>
        <option value="manyPoint">많은 포인트 순</option>
        <option value="littlePoint">적은 포인트 순</option>
      </select>
    </div>
  );
}
