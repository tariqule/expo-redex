import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//middleware
export const login = createAsyncThunk(
  "user/login",

  async (params: any) => {}
);

const loginState = {
  data: {},
  error: false,
  success: false,
  pending: false,
};
export const loginSlice = createSlice({
  name: "login",
  initialState: loginState,
  reducers: {
    storeUserState(state, action) {
      console.log(action.payload);
      state.data = action.payload;
    },
  },
});

export const selectLoginUser = (state: any) => state.login;

export default loginSlice.reducer;
