import { getUserApi, loginUserApi } from "../../helpers/authApi";
import { setUser } from "./userSlice";

export const loginAction = (form) => async (dispatch) => {
  const result = await loginUserApi(form);
  if (result.status === "success") {
    dispatch(setUser(result.findUser));
  }
  return result;
};

export const getUserAction = () => async (dispatch) => {
  const result = await getUserApi();
  if(result.status === "success") {
    dispatch(setUser(result.payload))
  } else {
    dispatch(setUser())
  };
};
