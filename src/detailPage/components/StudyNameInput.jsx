export function StudyNameInput({ studyName, setStudyName, isTouched, setIsTouched }) {
    return (
        <div className="detail-page-op">
            <div className="detail-page-studyName">스터디 이름</div>
            <input
                style={{ border: isTouched && !studyName ? "2px solid red" : "" }}
                value={studyName}
                onChange={(e) => setStudyName(e.target.value)}
                onFocus={() => setIsTouched(true)}
                onBlur={() => setIsTouched(false)}
                className="detail-page-studyName-input"
                placeholder="스터디 이름을 입력해 주세요"
            />
            <div
                className="input-err"
                style={{ display: isTouched && !studyName ? "block" : "none" }}
            >
                *스터디 이름을 입력해 주세요.
            </div>
        </div>
    )
}