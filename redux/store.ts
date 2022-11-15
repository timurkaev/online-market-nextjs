import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import loginReducer from "./slices/login-slice";

export const store = configureStore({
  reducer: {
    loginReducer,
  },
  devTools: true,
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
