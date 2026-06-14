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

export const getJobsApi = async (isPrivate) => {
  return apiProcessor({
    method: "get",
    url:jobAPiEP,
    isPrivate,
  });
};

export const deleteJobApi = async (_id, isPrivate) => {
  return apiProcessor({
    method: "delete",
    url: jobAPiEP + "/" + _id ,
    isPrivate
  })
};
