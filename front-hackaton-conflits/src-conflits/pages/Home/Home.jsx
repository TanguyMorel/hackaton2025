import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import "../styles/Home.css"; 


const Home = ({ setAuth }) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="home-container">
            <div className="left-section">
                <img src="/logo-x.png" alt="Logo X" className="logo" />
            </div>

            <div className="right-section">
                <h1>Ça se passe maintenant</h1>
                <p>Inscrivez-vous.</p>
                {isLogin ? <Login setAuth={setAuth} /> : <Signup setAuth={setAuth} />}
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

export default Home;

