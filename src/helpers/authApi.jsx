import { apiProcessor } from "./api.jsx";

const apiBaseUrl = import.meta.env.VITE_API_URL;

const authApiEP = apiBaseUrl + "/api/v1/auth";

export const registerUserApi = async (payload) => {
  return apiProcessor({
    method: "post",
    url: authApiEP + "/register",
    payload,
  });
};

export const loginUserApi = async (payload) => {
    return apiProcessor({
        method: "post",
        url: authApiEP + "/login",
        payload,
    })

}