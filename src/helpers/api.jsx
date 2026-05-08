import axios from "axios";

// const BASE_URL = import.meta.env.VITE_API_URL;

export const apiProcessor = async ({ method, url, payload, headers }) => {
  try {
    // const headers = {};
    console.log("API CALLED:", method, url);
    console.log("PAYLOAD:", payload);
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
