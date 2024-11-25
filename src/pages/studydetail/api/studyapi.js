import axios from "axios";
import { API_URL } from "../../../shared/api/API_URL";

export const getStudyById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/api/home/study/${id}`);
        return response.data.data; // 성공 시 데이터 반환
    } catch (err) {
        console.error(err);
    }
};

export const createEmoji = async (native, studyId) => {  // studyId를 함수의 인자로 받도록 수정
    try {
        console.log('Sending emoji:', native.native);  // native.native로 emojiIcon을 확인
        console.log('sending studyId : ', native.studyId);  // native.studyId로 studyId를 확인

        const response = await axios.post(`${API_URL}/api/home/emoji`, {
            emojiIcon: native.native,  // emojiIcon 값
            studyId: native.studyId,  // studyId 값
        });

        return response.data;  // 서버에서 반환한 데이터 반환
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