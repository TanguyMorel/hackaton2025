import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // ✅ Initialiser à null pour éviter le problème de redirection rapide

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("Token récupéré dans App.jsx:", token); // ✅ Vérification
        setIsAuthenticated(!!token);
    }, []);

    if (isAuthenticated === null) {
        return <div>Chargement...</div>; // ✅ Évite d'afficher la mauvaise page avant de savoir si l'utilisateur est connecté
    }

    return (
        <Router>
            <Routes>
                {/* Page d'accueil pour la connexion/inscription */}
                <Route path="/" element={!isAuthenticated ? <Home setAuth={setIsAuthenticated} /> : <Navigate to="/home" replace />} />
                
                {/* Page principale après connexion */}
                <Route path="/home" element={isAuthenticated ? <MainPage /> : <Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
};

export default App;
