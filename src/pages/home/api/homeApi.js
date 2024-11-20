import instance from "../../../shared/api/instance";

export async function getStudyListApi(
  page = 1,
  pageSize = 6,
  orderBy = "desc",
  keyword
) {
  try {
    let uri = `/api/home/main?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
    if (!!keyword) uri += `&keyword=${keyword}`;
    const response = (await instance.get(uri)) || [];
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getLatestStudyApi(body) {
  try {
    let uri = `/api/test/g`;
    const response = (await instance.post(uri, body)) || [];
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function emojiApi(body) {
  try {
    const response = await instance.post("/api/home/emojis", body);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
