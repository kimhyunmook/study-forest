import React, { useState } from "react";

function CheckboxImage() {
  const [isActive, setIsActive] = useState(false); // 활성화 상태 관리

  const handleToggle = () => {
    setIsActive((prev) => !prev); // 이전 상태를 반전
  };

  const imageSrc = isActive
    ? "활성화된_이미지경로" // 활성화 상태의 이미지..
    : "비활성화된_이미지경로"; // 비활성화 상태의 이미지

  return (
    <div>
      <img 
        src={imageSrc} 
        alt={isActive ? "활성화 이미지" : "비활성화 이미지"} 
        onClick={handleToggle} 
        style={{ cursor: "pointer" }} // 클릭 가능한 UI로 시각적 피드백
      />
    </div>
  );
}

export default CheckboxImage;
