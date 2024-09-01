import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./slices/userDetailSlice";

const store = configureStore({
  reducer: {
    user: userDetail,
  },
});

export default store;
