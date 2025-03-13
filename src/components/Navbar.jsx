import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {

    const handleLogout = () => {
        localStorage.removeItem("token"); // ❌ Supprime le token
        window.location.reload();
    };

    return (
        <nav className="sidebar">
            <div className="logo">
            <img src="logo-white.png" alt="Logo de Bleeper" className="logo" />
            </div>
            <ul>
            <Link to="/home">🏠 Accueil</Link>
            <Link to="/explore">🔍 Explorer</Link>
            <Link to="/notification">🔔 Notification</Link>
            <Link to="/messages">✉️ Messages</Link>
            <Link to="/profile">👤 Profil</Link>
            </ul>
            {/* <button className="tweet-btn">Tweet</button> */}

            <button className="logout-btn" onClick={handleLogout}>🚪 Déconnexion</button>
        </nav>
    );
};

export default Navbar;
