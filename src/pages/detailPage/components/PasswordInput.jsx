export function PasswordInput({ password, setPassword, isPasswordVisible, rePassword, setRePassword,
    isPasswordConfirmVisible, handlePasswordToggle, handlePasswordConfirmToggle }) {
    return (
        <>
            <div className="detail-page-op">
                <div className="detail-page-password">비밀번호</div>
                <div className="detail-page-password-container">
                    <div>
                        <input
                            style={{
                                border:
                                    (password.length < 8) && password
                                        ? "2px solid red" : "",
                            }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={isPasswordVisible ? "text" : "password"}
                            className="detail-page-studyName-input"
                            placeholder="비밀번호를 입력해 주세요"
                        />
                        <span
                            className="detail-page-password-typeChange-icon"
                            onClick={handlePasswordToggle}
                        >
                            <img
                                src={
                                    isPasswordVisible
                                        ? `${process.env.PUBLIC_URL}/img/passwordIcon2.svg`
                                        : `${process.env.PUBLIC_URL}/img/passwordIcon1.svg`
                                }
                                alt="passwordChangeIcon"
                                className="password-icon"
                            />
                        </span>
                    </div>

                    <div
                        className="input-err"
                        style={{
                            display: password.length < 8 && password ? "block" : "none",
                        }}
                    >
                        *8자 이상 입력해주세요
                    </div>
                </div>
            </div>


            <div className="detail-page-op">
                <div className="detail-page-password">비밀번호 확인</div>
                <div className="detail-page-password-container">
                    <div>
                        <input
                            style={{
                                border:
                                    (password !== rePassword) && rePassword
                                        ? "2px solid red" : "",
                            }}
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                            type={isPasswordConfirmVisible ? "text" : "password"}
                            className="detail-page-studyName-input"
                            placeholder="비밀번호를 다시 입력해 주세요"
                        />
                        <span
                            className="detail-page-password-typeChange-icon"
                            onClick={handlePasswordConfirmToggle}
                        >
                            <img
                                src={
                                    isPasswordConfirmVisible
                                        ? `${process.env.PUBLIC_URL}/img/passwordIcon2.svg`
                                        : `${process.env.PUBLIC_URL}/img/passwordIcon1.svg`
                                }
                                alt="passwordChangeIcon"
                                className="password-icon"
                            />
                        </span>
                    </div>
                    <div
                        className="input-err"
                        style={{
                            display:
                                (password !== rePassword) && rePassword ? "block" : "none",
                        }}
                    >
                        *비밀번호가 일치하지 않습니다
                    </div>
                </div>
            </div>
        </>
    )
}