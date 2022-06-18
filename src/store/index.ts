import { configureStore } from "@reduxjs/toolkit";
import instrumentSlice from "./features/instruments/instrumentSlice";
export const store = configureStore({
  reducer: {
    instrumentSlice: instrumentSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
