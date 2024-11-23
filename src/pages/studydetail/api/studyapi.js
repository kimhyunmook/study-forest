import axios from "axios";
import { API_URL } from "../../../shared/api/API_URL";

export const getStudyById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/api/home/study/${id}`);
        return response.data.data;
    } catch (err) {
        console.error(err);
    }
};

export const createEmoji = async (native, studyId) => {
    try {
        const response = await axios.post(`${API_URL}/api/studydetail/emojis`, {
            emojiIcon: native.native,
            studyId: native.studyId,
        });

        return response.data;
    } catch (error) {
        console.error("이모지 생성 중 오류 발생:", error);
        throw error;
    }
};