import { loginAdminUser } from "../../components/helper/axiosHelper";
import { toast } from "react-toastify";
import { setAdminUser } from "./userSlice";

//For admin user Login
export const loginUserAction = (data) => async (dispatch) => {
  const resultPromise = loginAdminUser(data);
  toast.promise(resultPromise, { pending: "please wait....." });
  const { status, message, user } = await resultPromise;
  toast[status](message);
  status === "success" && dispatch(setAdminUser(user));
};
