import axios from "axios";
import { API_URL } from "../../../shared/api/API_URL";
import instance from "../../../shared/api/instance";

export async function getStudyInfo(id) {
  try {
    const response = await instance.get(`/api/focus/study/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function updateStudyPoint({ id, updatedPoint }) {
  try {
    const response = await instance.patch(`/api/focus/${id}`, {
      point: updatedPoint, // 서버로 새로운 점수 전송
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
