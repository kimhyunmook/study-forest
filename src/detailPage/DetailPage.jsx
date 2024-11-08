import './css/DetailPage.css'
import { useState } from 'react';

function DetailPage() {

    const [nickName, setNickName] = useState(""); //닉네임
    const [studyName, setStudyName] = useState(""); //스터디 이름
    const [intro, setIntro] = useState(""); // 소개
    const [password, setPassword] = useState(""); //패스워드
    const [rePassword, setrePassword] = useState(""); //패스워드 확인

    //패스워드 type변경
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(false);

    const handlePasswordToggle = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handlePasswordConfirmToggle = () => {
        setIsPasswordConfirmVisible(!isPasswordConfirmVisible);
    };


    const backgroundImages = [
        { src: 'background_1.png', alt: 'background_1' },
        { src: 'background_2.png', alt: 'background_2' },
        { src: 'background_3.png', alt: 'background_3' },
        { src: 'background_4.png', alt: 'background_4' },
        { src: 'background_5.png', alt: 'background_5' },
        { src: 'background_6.png', alt: 'background_6' },
        { src: 'background_7.png', alt: 'background_7' },
        { src: 'background_8.png', alt: 'background_8' },
    ];

    return (
        <div className="detail-page-contain">
            <div className='detail-page-title'>스터디 만들기</div>
            <div className='detail-page-main'>
                <div className='detail-page-op'>
                    <div className='detail-page-nickname'>닉네임</div>
                    <input className='detail-page-nickname-input' placeholder='닉네임을 입력해 주세요' />
                    <div className="input-err"
                        style={{ display: nickName.length > 10 ? "block" : "none" }}>10자 이내로 입력해주세요</div>
                </div>
                <div className='detail-page-op'>
                    <div className='detail-page-studyName'>스터디 이름</div>
                    <input className='detail-page-studyName-input' placeholder='스터디 이름을 입력해 주세요' />
                    <div className="input-err"
                        style={{ display: studyName.length > 10 ? "block" : "none" }}>10자 이내로 입력해주세요</div>
                </div>
                <div className='detail-page-op'>
                    <div className='detail-page-introduce'>소개</div>
                    <input className='detail-page-introduce-input' placeholder='소개 멘트를 작성해주세요' />
                    <div className="input-err"
                        style={{ display: intro.length > 10 ? "block" : "none" }}>10자 이내로 입력해주세요</div>
                </div>
                <div className='detail-page-op'>
                    <div className='detail-page-background'>배경을 선택해주세요</div>
                    <div className='detail-page-background-imgChoice'>
                        {backgroundImages.map((image, index) => (
                            <div className='detail-page-background-imgChoice-img' key={index}>
                                <img src={`${process.env.PUBLIC_URL}/img/${image.src}`} alt={image.alt} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='detail-page-op'>
                    <div className='detail-page-password'>비밀번호</div>
                    <div className='detail-page-password-container'>
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            className='detail-page-studyName-input'
                            placeholder='비밀번호를 입력해 주세요'
                        />
                        <div className="input-err"
                            style={{ display: password.length > 10 ? "block" : "none" }}>10자 이내로 입력해주세요</div>
                        <span
                            className='detail-page-password-typeChange-icon'
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
                </div>
                <div className='detail-page-op'>
                    <div className='detail-page-password'>비밀번호 확인</div>
                    <div className='detail-page-password-container'>
                        <input
                            type={isPasswordConfirmVisible ? 'text' : 'password'}
                            className='detail-page-studyName-input'
                            placeholder='비밀번호를 다시 입력해 주세요'
                        />
                        <div className="input-err"
                            style={{ display: rePassword.length > 10 ? "block" : "none" }}>10자 이내로 입력해주세요</div>
                        <span
                            className='detail-page-password-typeChange-icon'
                            onClick={handlePasswordConfirmToggle}
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
                </div>
                <div className='detail-page-button'>
                    <img src={`${process.env.PUBLIC_URL}/img/DetailPage_button.png`} alt="button" />
                </div>
            </div>
        </div>
    );
}

export default DetailPage;