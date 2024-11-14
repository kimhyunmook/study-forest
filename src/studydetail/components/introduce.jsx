
import React, { useState } from "react";
import {View , TextInput, StyleSheet} from "react-native";

export const MyInput = () => {
  const [text, setText] = useState('');

  const onChangeText = (inputText) => {
    setText(inputText);
  };
  return (
    <view style={style.container}>
      <TextInput
        onchangeText={onchangeText}
        value={text}
        placeholder="소개를 입력해주세요."
        style={StyleSheet.input}/>
    </view>
  );
};

const style = StyleSheet.creat({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});

export default Myinput;
