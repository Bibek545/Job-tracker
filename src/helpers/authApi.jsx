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

export const loginUserApi = async (payload, findUser) => {
    return apiProcessor({
        method: "post",
        url: authApiEP + "/login",
        payload,
        findUser,
    });
};

export const getUserApi = async () => {
  return apiProcessor({
    method: "get",
    url: authApiEP + "/profile",
    isPrivate: true,
  });
};

export const changePasswordApi = async (formData) => {
  return apiProcessor({
    method: "patch",
    url: authApiEP + "/update-password",
    payload: formData,
    isPrivate: true,
  })
};

export const editProfileApi = (profileForm) => {
  return apiProcessor({
    method: "patch",
    url: authApiEP + "/update-profile",
    payload: profileForm,
    isPrivate: true,
  })
}

