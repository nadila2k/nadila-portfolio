import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuth = false;
    },
  },
});


export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;