import {configureStore} from "@reduxjs/toolkit";
import user from "./reducer/user.js";

export default configureStore({
    reducer: {
        user
    }
})