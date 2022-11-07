import { loginAdminUser } from "../../components/helper/axiosHelper";
import { toast } from "react-toastify";
import { setAdminUser } from "./userSlice";

//For admin user Login
export const loginUserAction = (data) => async (dispatch) => {
  const resultPromise = loginAdminUser(data);
  toast.promise(resultPromise, { pending: "please wait....." });
  const { status, message, user, accessJWT, refreshJWT } = await resultPromise;
  toast[status](message);
  if (status === "success") {
    sessionStorage.setItem("accessJWT", accessJWT);
    localStorage.setItem("refreshJWT", refreshJWT);
    dispatch(setAdminUser(user));
  }
};

export const adminLogout = () => (dispatch) => {
  dispatch(setAdminUser({}));
};
