import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginApi } from "../API/login-api";
import { LoginBody, LoginState, ResponseUserInterface } from "../../interfaces/login-interface";

const initialState: LoginState = {
  user: {} as ResponseUserInterface,
  isLoading: false,
  error: undefined,
};

export const loginUserAsync = createAsyncThunk(
  "auth/login",
  async ({ username, password }: LoginBody): Promise<ResponseUserInterface> => {
    return await LoginApi.loginUser(username, password);
  },
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginUserAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
