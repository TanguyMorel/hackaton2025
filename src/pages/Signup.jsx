import { useState } from "react";
import axios from "../utils/axios.js";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post("auth/register", { username, email, password });
            localStorage.setItem("token", "fake-jwt-token");
            alert("Inscription réussi");
        } catch (error) {
            console.error(error);
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



