import {configureStore} from "@reduxjs/toolkit";
import user from "./reducer/user.js";
import tweet from "./reducer/tweet.js";
import notification from "./reducer/notification.js";

export default configureStore({
    reducer: {
        user,
        tweet,
        notification,
    }
})