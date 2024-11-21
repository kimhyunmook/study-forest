import s from "../css/loading.module.css";
export default function Loading({ loading = false, style = {} }) {
  if (loading)
    return (
      <div className={s.loading} style={style}>
        <div className={s.loadingText}>
          <div className={s.text}>
            <img src="/img/loading1.svg" alt="로딩이미지" />
          </div>
          <div className={s.text}>
            <img src="/img/loading2.svg" alt="로딩이미지" />
          </div>
          <div className={s.text}>
            <img src="/img/loading3.svg" alt="로딩이미지" />
          </div>
          <div className={s.text}>
            <img src="/img/loading4.svg" alt="로딩이미지" />
          </div>
          <p className={s.msg}>로딩중입니다. 잠시만 기다려주세요</p>
        </div>
      </div>
    );
}
