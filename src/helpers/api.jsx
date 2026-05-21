import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL;
const getAccessJWT = () => {
  return localStorage.getItem("jwtToken");
};

export const apiProcessor = async ({ method, url, payload, isPrivate }) => {
  try {
    const headers = {};
    if (isPrivate) {
      const token = getAccessJWT();
      headers.Authorization = "Bearer " + token;
      if (!token) {
        return alert("please login again");
      }
      // console.log("TOKEN:", token);
      // console.log("HEADERS:", headers);
    }

    const responsePending = axios({
      method,
      url,
      data: payload,
      headers,
    });

    const { data } = await responsePending;
    console.log("API RESPONSE:", data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.response?.data?.message || error.message,
    };
  }
};
