import React, { useState } from "react";

function IntroduceInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="소개를 입력해주세요."
      />
    </div>
  );
}

export default IntroduceInput;