import instance from "../../../shared/api/instance";

export const EditStudy = async ({
  id,
  nickName,
  studyName,
  introduce,
  background,
  password,
}) => {
  try {
    const response = await instance.patch(`/api/detailPage/${id}`, {
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
