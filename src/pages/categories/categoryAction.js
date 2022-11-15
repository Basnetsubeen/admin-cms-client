import { toast } from "react-toastify";
import {
  deleteCategory,
  fetchCategory,
  postCategory,
  updateCategory,
} from "../../components/helper/axiosHelper";
import { setCategories } from "./CategorySlice";

//fech category action
export const getCategoriesAction = () => async (dispatch) => {
  const { status, categories } = await fetchCategory();
  status === "success" && dispatch(setCategories(categories));
};

//post category action
export const postCategoriesAction = (data) => async (dispatch) => {
  const promisePending = postCategory(data);
  toast.promise(promisePending, { pending: "Please wait ..... " });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(getCategoriesAction());
};
//updatecategory action
export const updateCategoriesAction = (_id) => async (dispatch) => {
  const promisePending = updateCategory(_id);
  toast.promise(promisePending, { pending: "Please wait ..... " });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(getCategoriesAction());
};
//deletecategory action
export const deleteCategoriesAction = (_id) => async (dispatch) => {
  const promisePending = deleteCategory(_id);
  toast.promise(promisePending, { pending: "Please wait ..... " });
  const { status, message } = await promisePending;
  toast[status](message);
  status === "success" && dispatch(getCategoriesAction());
};
