import { useState } from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import "../styles/Home.css"; 


const Disconnected = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="home-container">
            <div className="left-section">
                <img src="/logo-x.png" alt="Logo X" className="logo" />
            </div>

            <div className="right-section">
                <h1>Ça se passe maintenant</h1>
                <p>Inscrivez-vous.</p>
                {isLogin ? <Login /> : <Signup />}
                <p className="toggle-auth">
                    {isLogin ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? " S'inscrire" : " Se connecter"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Disconnected;

