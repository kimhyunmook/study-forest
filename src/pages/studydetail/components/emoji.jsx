import React, { useState } from 'react';
import EmojiPicker from '@emoji-mart/react';
import { createEmoji } from '../api/studyapi';

function EmojiPickerComponent({ selectedEmoji, setEmoji, studyId, fetchStudyData }) {
  const [isPickerVisible, setPickerVisible] = useState(false);

  const handleEmojiSelect = async (emoji) => {
    setEmoji(emoji.native);
    try {
      const response = await createEmoji({ native: emoji.native, studyId });
      console.log("Emoji added successfully:", response);
      await fetchStudyData(); // 이모지 추가 후 데이터 다시 요청
    } catch (err) {
      console.error("Failed to add emoji:", err);
    }
  };

  const emojiAdd = "/img/emoji_add_button.png";

  const togglePicker = () => {
    setPickerVisible(!isPickerVisible);
  };

  return (
    <div className="emoji-container">
      {/* 이모지 추가 버튼 */}
      <div onClick={togglePicker} className="emoji-add-button">
        <img src={emojiAdd} alt="emojiAdd" />
      </div>

      {/* 이모지 선택기 */}
      {isPickerVisible && (
        <div className="emoji-picker-container">
          <EmojiPicker onEmojiSelect={handleEmojiSelect} />
        </div>
      )}
    </div>
  );
}

export default EmojiPickerComponent;
