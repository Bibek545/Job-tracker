import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL;
const getAccessJWT = () => {
  return localStorage.getItem("accessJWT")
}

export const apiProcessor = async ({ method, url, payload, isPrivate }) => {
  try {
    const headers = {}; 
    if(isPrivate) {
      const token = getAccessJWT();
      headers.authorization = "bearer " + token;
      if(!token) {
        return alert("please login again")
      }
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
