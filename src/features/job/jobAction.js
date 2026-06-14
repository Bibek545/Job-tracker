import { deleteJobApi, getJobsApi, newJobApi } from "../../helpers/jobApi"
import { setJobs } from "./jobSlice.js";

// export const addJobAction = (formData) => async (dispatch) => {
//  const { status } = await newJobApi(formData, true);
//    console.log(status);
//  status === "success" && dispatch(fetchAllJobsAction())
// };

export const addJobAction = (formData) => async (dispatch) => {
  const result = await newJobApi(formData, true);

  console.log(result);

  result.status === "success" && dispatch(fetchAllJobsAction());
  return result;
};

export const fetchAllJobsAction = () => async (dispatch) => {
    const {status, payload, message} = await getJobsApi(true);
    status === "success" && dispatch(setJobs(payload));
    status === "error" && message === "No jobs found" && dispatch(setJobs([]))
};


// export const deletejobAction = (_id) => async (dispatch) => {
//   const response = await deleteJobApi(_id, true);
//   console.log("deleteJobApi", _id);
//   if(response.status === "success") {
//     dispatch(fetchAllJobsAction());
//   }
// };


export const deletejobAction = (_id) => async (dispatch) => {
   const { status } = await deleteJobApi(_id, true);
    if(status === "success") {
      dispatch(fetchAllJobsAction());
    }
};