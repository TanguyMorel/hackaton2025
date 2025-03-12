import "../styles/Home.css";
import TweetInput from "../components/TweetInput/TweetInput.jsx";
import {fakeTweets} from "../components/Tweet/Datas.js";
import Tweet from "../components/Tweet/Tweet.jsx";
import React, {useEffect, useState} from "react";


const Home = () => {

    const [tweets, setTweets] = useState(fakeTweets);


    const submitTweet = (data) => {
        console.log(data);
        setTweets(x => [...x, data]);
    }
    const toggleFavorite = (id) => {
        console.log(id)
    }

    useEffect(() => {
        console.log(tweets);
    })

    return (
<<<<<<< HEAD
        <div className="home-container">
            <div className="left-section">
                <img src="/logo-x.png" alt="Logo X" className="logo" />
            </div>
            <div className="right-section">
                <h1>Ça se passe maintenant !</h1>
                <p>{isLogin ? "Connectez-vous" : "Inscrivez-vous"}</p>
                {isLogin ? <Login /> : <Signup />}
                <p className="toggle-auth">
                    {isLogin ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "S'inscrire" : "Se connecter"}
                    </span>
                </p>
=======
        <div className="flex flex-col h-full">
            <TweetInput onTweet={submitTweet}/>
            <div className="flex flex-col flex-1 overflow-y-auto">
                {tweets.map((tweet) => <Tweet key={tweet.id} {...tweet} toggleFavorite={toggleFavorite}/>
                )}
>>>>>>> 3de52dd0a85453a9e56c9984aea6e2d0f383edec
            </div>
        </div>
    );
};

export default Home;

