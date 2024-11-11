export function NickNameInput({ nickName, setNickName }) {

    return (
        <div className="detail-page-op">
            <div className="detail-page-nickname">닉네임</div>
            <input
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
                className="detail-page-nickname-input"
                placeholder="닉네임을 입력해 주세요"
            />
        </div>
    )
}