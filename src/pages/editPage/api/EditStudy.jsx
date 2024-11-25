import axios from "axios";
import { API_URL } from "../../../shared/api/API_URL";

export const EditStudy = async ({
  id,
  nickName,
  studyName,
  introduce,
  background,
  password,
}) => {
  try {
    const response = await axios.patch(`${API_URL}/api/detailPage/${id}`, {
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
