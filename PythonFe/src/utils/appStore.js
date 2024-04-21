import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import modelSlice from "./modelSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        model: modelSlice,
    }
})

export default appStore;