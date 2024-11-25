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

export const updateHabitStatus = async (habitId, day, status) => {
    try {
        const response = await axios.patch(
            `${API_URL}/api/home/habits/${habitId}/status`,
            { day, status }
        );
    } catch (error) {
        console.error('Error updating habit status:', error);
    }
};

export const createEmoji = async (native, studyId) => {  // studyId를 함수의 인자로 받도록 수정
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

export const deleteStudyById = async (id) => {
    console.log("API 호출 ID:", id); // API 호출 시 ID 확인
    try {
        await axios.delete(`${API_URL}/api/home/study/${id}`);
    } catch (err) {
        console.error("스터디 삭제 중 오류 발생:", err);
        throw err;
    }
};