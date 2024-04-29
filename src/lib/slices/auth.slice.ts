import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authInfo: {
      accessToken: null,
      userId: null,
    },
    userInfo: null,
  },
  reducers: {
    getAuthInfoSuccess: (state, action) => {
      state.authInfo = action.payload;
    },
    getUserInfoSuccess: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { getAuthInfoSuccess, getUserInfoSuccess } = authSlice.actions;

export default authSlice.reducer;
