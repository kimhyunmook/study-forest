import axios from "axios";
import { API_URL } from "../../../shared/api/API_URL";
import instance from "../../../shared/api/instance";


// 1. 오늘의 습관 조회
export async function getHabits() {
  try {
    const response = await axios.get(`${API_URL}/habits`);
    return response.data;
  } catch (error) {
    console.error("오늘의 습관 조회 실패:", error.message);
    throw error;
  }
}

// 2. 습관 추가
export async function updateHabitName(id, name) {
  try {
    const response = await axios.put(`${API_URL}/habitPage/habits/${id}`, { name });
    return response.data;
  } catch (error) {
    console.error("습관 추가 실패:", error.message);
    throw error;
  }
}

// 3. 습관 삭제
export async function deleteHabit(id) {
  try {
    await axios.delete(`${API_URL}/habits/${id}`);
    return true; // 삭제 성공 시 true 반환
  } catch (error) {
    console.error("습관 삭제 실패:", error.message);
    throw error;
  }
}

// 4. 오늘의 습관 박스 체크/해제
export async function toggleHabitCheck(id) {
  try {
    const response = await axios.post(`${API_URL}/habit/${id}/check`);
    return response.data;
  } catch (error) {
    console.error("체크/해제 실패:", error.message);
    throw error;
  }
}


export const getNickNameById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/study/${id}`);
    return response.data.data.nickName; // nickName만 반환
  } catch (err) {
    console.error("닉네임 가져오기 실패:", err);
    throw err;
  }
};

export const getStudyById = async (id) => {
  try {
    const response = await instance.get(`/api/habitPage/habits/${id}`);
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};


