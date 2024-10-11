import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReduer from "./movieSlice"

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies : movieReduer,
    },
});