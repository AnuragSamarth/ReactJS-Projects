import { configureStore } from "@reduxjs/toolkit";
import  usersSlice from "./slices/UserSlice";

const store = configureStore({
    reducer: {
        users: usersSlice,
    }
});

export default store;