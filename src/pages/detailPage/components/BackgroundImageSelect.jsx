import { backgroundImages } from "./backgroundImages";
import { useEffect } from "react";

export function BackgroundImageSelect({ background, setBackground }) {
    useEffect(() => {
        console.log("Updated Background:", background);
    }, [background]);

    return (
        <div className="detail-page-op">
            <div className="detail-page-background">배경을 선택해주세요</div>
            <div className="detail-page-background-imgChoice">
                {/* 이미지 선택하면 index값이 value로 전달됨 */}
                {backgroundImages.map((image, index) => (
                    <div
                        className="detail-page-background-imgChoice-img"
                        value={image.value}
                        onClick={() => {
                            setBackground(image.value);
                        }}
                        key={index}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/img/${image.src}`}
                            alt={image.alt}
                        />

                        {/* 선택된 이미지 가운데에 select-icon이 올라가게 설정 */}
                        {background === image.value && (
                            <div className="detail-page-imageSelect">
                                <img
                                    className="detail-page-imageSelect-icon"
                                    src={`${process.env.PUBLIC_URL}/img/image_select.svg`}
                                    alt="select"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}