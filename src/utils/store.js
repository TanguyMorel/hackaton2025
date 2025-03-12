import {configureStore} from "@reduxjs/toolkit";
import user from "./reducer/user.js";
import tweet from "./reducer/tweet.js";

export default configureStore({
    reducer: {
        user,
        tweet,
    }
})