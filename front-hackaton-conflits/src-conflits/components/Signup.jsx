import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ setAuth }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", { username, email, password });
            localStorage.setItem("token", "fake-jwt-token");
            setAuth(true); // <-- Met à jour `isAuthenticated`
            navigate("/home"); // <-- Redirige immédiatement
        } catch (error) {
            alert("Erreur lors de l'inscription");
        }
    };

    return (
        <form onSubmit={handleSignup} className="auth-form">
            <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Créer un compte</button>
        </form>
    );
};

export default Signup;



