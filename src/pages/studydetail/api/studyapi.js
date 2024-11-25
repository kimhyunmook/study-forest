import axios from "axios";
import { API_URL } from "../../../shared/api/API_URL";
import instance from "../../../shared/api/instance";

export const getStudyById = async (id) => {
  try {
    const response = await instance.get(`/api/study/${id}`);
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};

export const createEmoji = async (native, studyId) => {
  try {
    const response = await instance.post(`/api/study/emoji`, {
      emojiIcon: native.native,
      studyId: native.studyId,
    });

    return response.data;
  } catch (error) {
    console.error("이모지 생성 중 오류 발생:", error);
    throw error;
  }
};

export const deleteStudyById = async (id) => {
  console.log("API 호출 ID:", id);
  try {
    await axios.delete(`${API_URL}/api/home/study/${id}`);
  } catch (err) {
    console.error("스터디 삭제 중 오류 발생:", err);
    throw err;
  }
};
