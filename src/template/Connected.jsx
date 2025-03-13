import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Trends from "../components/Trends";
import "../styles/MainPage.css";
import {Route, Router, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Profile from "../components/Profile/Profile.jsx";
import Notification from "../pages/Notification/Notification.jsx";
import useUserHook from "../utils/hook/useUserHook.js";
import useNotification from "../utils/hook/useNotification.js";


const Connected = () => {

    useUserHook()
    useNotification()

    return (
        <div className="main-container h-full flex overflow-hidden">
            <Navbar/>
            <div className="flex-1 pt-2 px-2 overflow-y-auto">
                <Routes>
                    <Route path="*" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/notification" element={<Notification/>}/>
                </Routes>
            </div>
            <div>

                <Trends/>
            </div>
        </div>
    )
        ;
};

export default Connected;
