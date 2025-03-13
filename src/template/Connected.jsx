import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Trends from "../components/Trends";
import "../styles/MainPage.css";
import {Route, Router, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Profile from "../components/Profile/Profile.jsx";
import Notification from "../pages/Notification/Notification.jsx";
import useUserHook from "../utils/hook/useUserHook.js";


const Connected = () => {

    useUserHook()

    return (
        <div className="main-container h-full flex">
            <Navbar/>
            <div className="flex-1 pt-8 px-2">
                <Routes>
                    <Route path="*" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/notification" element={ <Notification /> } />
                </Routes>
            </div>
            <Trends/>
        </div>
    )
        ;
};

export default Connected;
