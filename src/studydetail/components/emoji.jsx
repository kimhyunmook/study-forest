import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

function AppEmoji() {
  const [emojiList, setEmojiList] = useState([]); // 이모지 리스트 상태 관리

  const handleEmojiClick = (emoji) => {
    // 이미 추가된 이모지를 찾음
    const existingEmoji = emojiList.find((item) => item.emoji === emoji.emoji);

    if (existingEmoji) {
      // 이미 존재하면 카운트 증가
      setEmojiList((prev) =>
        prev.map((item) =>
          item.emoji === emoji.emoji
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      // 새 이모지를 리스트에 추가
      setEmojiList((prev) => [...prev, { emoji: emoji.emoji, count: 1 }]);
    }
  };

  const removeEmoji = (emoji) => {
    // 이모지 삭제 기능
    setEmojiList((prev) =>
      prev.filter((item) => item.emoji !== emoji.emoji)
    );
  };

  return (
    <div>
      <h2>이모지 추가</h2>
      <div>
        {emojiList.map((item) => (
          <div key={item.emoji}>
            <span>{item.emoji}</span>
            <span>{item.count}</span>
            <button onClick={() => removeEmoji(item)}>삭제</button>
          </div>
        ))}
      </div>
      <EmojiPicker onEmojiClick={handleEmojiClick} />
    </div>
  );
}

export default AppEmoji;
