import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideMenu: true,
  modalShow: true,
};
const systemSlice = createSlice({
  name: "adminSystem",
  initialState,
  reducers: {
    setShowSideMenu: (state, { payload }) => {
      state.showSideMenu = payload;
    },
    setModalShow: (state) => {
      state.modalShow = !state.modalShow;
    },
  },
});

const { reducer, actions } = systemSlice;
export const { setShowSideMenu, setModalShow } = actions;

export default reducer;
