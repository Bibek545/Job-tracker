import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../features/job/jobSlice.js"
const store = configureStore({
    reducer: {
        jobInfo: jobReducer,
    },
});

export default store;