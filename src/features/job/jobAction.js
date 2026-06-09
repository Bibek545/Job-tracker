import { getJobsApi } from "../../helpers/jobApi"
import { setJobs } from "./jobSlice.js";

export const fetchAllJobsAction = () => async (dispatch) => {
    const {status, payload} = await getJobsApi(true);
    status === "success" && dispatch(setJobs(payload));
}