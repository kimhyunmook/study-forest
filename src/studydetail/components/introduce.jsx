import React, { useState } from "react";
import { View, TextInput } from "react-native";

export const IntroduceInput = () => {
  const [text, setText] = useState(""); // 상태 관리

  return (
    <View>
      <TextInput
        onChangeText={setText} // 상태 업데이트
        value={text} // 상태 연결
        placeholder="소개를 입력해주세요." // 플레이스홀더 텍스트
        multiline // 여러 줄 입력 허용
      />
    </View>
  );
};

export default IntroduceInput;
