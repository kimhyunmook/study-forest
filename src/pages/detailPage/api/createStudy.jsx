import axios from "axios";
import { API_URL } from "../../../shared/api/API_URL";

export const createStudy = async ({ nickName, studyName, intro, background, password }) => {
    console.log(nickName);
    console.log(studyName);
    console.log(intro);
    console.log(background);
    console.log(password);
    try {
        const response = await axios.post(`${API_URL}/api/studydetail`, {
            nickName,
            studyName,
            intro,
            background,
            password
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};