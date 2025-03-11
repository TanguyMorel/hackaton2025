import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Trends from "../components/Trends";
import "../styles/MainPage.css";


const MainPage = () => {
    return (
        <div className="main-container">
            <Navbar />
            <Feed />
            <Trends />
        </div>
    );
};

export default MainPage;
