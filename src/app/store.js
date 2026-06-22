import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../features/job/jobSlice.js"
import  userReducer  from "../features/auth/userSlice.js";
const store = configureStore({
    reducer: {
        jobInfo: jobReducer,
        userInfo: userReducer,
    },
});

export default store;