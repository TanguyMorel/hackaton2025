import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ setAuth }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // ❌ Supprime le token
        setAuth(false); // ❌ Met à jour l'état d'authentification
        navigate("/"); // 🔄 Redirige vers la page de connexion
    };

    return (
        <nav className="sidebar">
            <h2>🚀 X</h2>
            <Link to="/home">🏠 Accueil</Link>
            <Link to="/explore">🔍 Explorer</Link>
            <Link to="/notifications">🔔 Notifications</Link>
            <Link to="/messages">✉️ Messages</Link>
            <Link to="/Profile">👤 Profil</Link>
            <button className="tweet-btn">Tweet</button>

            {/* Bouton Déconnexion */}
            <button className="logout-btn" onClick={handleLogout}>🚪 Déconnexion</button>
        </nav>
    );
};

export default Navbar;
