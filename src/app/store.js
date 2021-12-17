import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counterSlice";
import appReducer from "../features/counter/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
