import {Link} from "react-router-dom";
import "../styles/Navbar.css";
import {useSelector} from "react-redux";

const Navbar = () => {
    const notifications = useSelector((state) => state.notification.value).filter((notification) => !notification.isRead);


    const handleLogout = () => {
        localStorage.removeItem("token"); // ❌ Supprime le token
        window.location.reload();
    };

    return (
        <nav className="sidebar">
            <div className="logo">
                <img src="logo-white.png" alt="Logo de Bleeper" className="logo"/>
            </div>
            <ul>
                <Link to="/home">🏠 Accueil</Link>
                <Link to="/advancedSearch">🔍 Recherches avancées</Link>
                <Link to="/notification" className="flex items-center gap-1">
                    🔔 Notification
                    {
                        notifications.length > 0 &&
                        (<div className="bg-blue-400 rounded-full w-[20px] h-[20px] flex items-center justify-center">
                            {notifications.length}
                        </div>)
                    }
                </Link>
                <Link to="/messages">✉️ Messages</Link>
                <Link to="/profile">👤 Profil</Link>
            </ul>
            {/* <button className="tweet-btn">Tweet</button> */}

            <button className="logout-btn" onClick={handleLogout}>🚪 Déconnexion</button>
        </nav>
    );
};

export default Navbar;
