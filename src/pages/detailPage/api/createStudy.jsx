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
