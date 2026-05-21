import { apiProcessor } from "./api.jsx";

const apiBaseUrl = import.meta.env.VITE_API_URL;
const jobAPiEP = apiBaseUrl + "/api/v1/jobs";

export const newJobApi = async (payload,isPrivate) => {
  return apiProcessor({
    method: "post",
    url: jobAPiEP,
    payload,
    isPrivate,
  });
};
