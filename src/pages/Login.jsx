import { useState } from "react";
import axios from "../utils/axios.js";
import "../styles/Login.css"; 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("auth/login", { email, password });
            localStorage.setItem("token", response.data.token);
            window.location.reload();
        } catch (error) {
            console.error(error)
            alert("Erreur de connexion");
        }
    };

    return (
        <form onSubmit={handleLogin} className="auth-form">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Se connecter</button>
        </form>
    );
};

export default Login;
