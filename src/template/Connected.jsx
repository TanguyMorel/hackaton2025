import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Trends from "../components/Trends";
import "../styles/MainPage.css";
import {Route, Router, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Profile from "../components/Profile/Profile.jsx";
import Notification from "../pages/Notification/Notification.jsx";
import useUserHook from "../utils/hook/useUserHook.js";
import {useEffect} from "react";


const Connected = () => {

    useUserHook()

    return (
        <div className="main-container h-full overflow-y-hidden flex">
            <Navbar/>
            <div className="flex-1 h-[100vh] overflow-y-hidden">
                <Routes>
                    <Route path={"*"} element={<Home/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path="/notification" element={ <Notification /> } />
                </Routes>
            </div>
            <Trends/>
        </div>
    )
        ;
};

export default Connected;
