import axios from "axios";
import { API_URL } from "../../../shared/api/API_URL";
import instance from "../../../shared/api/instance";

export const createStudy = async ({
  nickName,
  studyName,
  introduce,
  background,
  password,
}) => {
  try {
    const response = await instance.post(`/api/detailPage/create`, {
      nickName,
      studyName,
      introduce,
      background,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
