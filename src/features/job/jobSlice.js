import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  jobs: [],
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

const { reducer, actions } = jobSlice;
export const {setJobs} = actions;

export default reducer;
