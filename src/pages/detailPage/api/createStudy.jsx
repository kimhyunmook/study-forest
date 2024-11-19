import axios from "axios";
import { API_URL } from "../../../shared/api/API_URL";

export const createStudy = async ({ nickName, studyName, introduce, background, password }) => {
    try {
        const response = await axios.post(`${API_URL}/api/studydetail`, {
            nickName,
            studyName,
            introduce,
            background,
            password
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};