export function IntroInput({ intro, setIntro }) {
    return (
        <div className="detail-page-op">
            <div className="detail-page-introduce">소개</div>
            <textarea
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                className="detail-page-introduce-input"
                placeholder="소개 멘트를 작성해주세요"
            />
            <div
                className="input-err"
                style={{ display: intro & (intro.length < 0) ? "block" : "none" }}
            >
                소개 멘트를 작성해주세요
            </div>
        </div>
    )
}