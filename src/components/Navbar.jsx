import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {

    const handleLogout = () => {
        localStorage.removeItem("token"); // ❌ Supprime le token
        window.location.reload();
    };

    return (
        <nav className="sidebar">
            <h2>🚀 X</h2>
            <Link to="/home">🏠 Accueil</Link>
            <Link to="/explore">🔍 Explorer</Link>
            <Link to="/notification">🔔 Notification</Link>
            <Link to="/messages">✉️ Messages</Link>
            <Link to="/profile">👤 Profil</Link>
            <button className="tweet-btn">Tweet</button>

            {/* Bouton Déconnexion */}
            <button className="logout-btn" onClick={handleLogout}>🚪 Déconnexion</button>
        </nav>
    );
};

export default Navbar;
