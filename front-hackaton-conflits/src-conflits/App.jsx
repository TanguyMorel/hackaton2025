import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/SideBar/SideBar";
import Profile from "./pages/Profile/Profile";
import TweetInput from "./components/TweetInput/TweetInput";
import Tweet from "./components/Tweet/Tweet";
import Notifications from "./pages/Notifications/Notifications";
import Favorites from "./pages/Favorites/Favorites";
import { fakeTweets } from './components/Tweet/Datas'; 
import Home from "./pages/Home/Home";
import MainPage from "./pages/MainPage";

export const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // ✅ Initialisation pour éviter un problème de redirection rapide
    const [tweets, setTweets] = useState(fakeTweets);
    const [favorites, setFavorites] = useState([]); // ✅ Ajouté pour gérer les favoris

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("Token récupéré dans App.jsx:", token);
        setIsAuthenticated(!!token);
    }, []);

    if (isAuthenticated === null) {
        return <div>Chargement...</div>; // ✅ Évite un affichage erroné avant chargement
    }

    const handleNewTweet = (newTweet) => {
        setTweets([newTweet, ...tweets]);
    };

    const toggleFavorite = (tweetId) => {
        setTweets((prevTweets) =>
            prevTweets.map((tweet) =>
                tweet.id === tweetId ? { ...tweet, liked: !tweet.liked } : tweet
            )
        );

        setFavorites((prevFavorites) => {
            const updatedTweets = tweets.map(tweet =>
                tweet.id === tweetId ? { ...tweet, liked: !tweet.liked } : tweet
            );

            const updatedTweet = updatedTweets.find(t => t.id === tweetId);
            
            return updatedTweet.liked
                ? [...prevFavorites, updatedTweet]
                : prevFavorites.filter(fav => fav.id !== tweetId);
        });
    };

    return (
        <Router>
            <div style={{ display: "flex" }}>
                {/* ✅ Sidebar affichée sur toutes les pages */}
                {isAuthenticated && <Sidebar />}
                <div style={{ marginLeft: isAuthenticated ? "270px" : "0", width: "100%" }}>
                    <Routes>
                        {/* 🔹 Redirection basée sur l'authentification */}
                        <Route 
                            path="/" 
                            element={!isAuthenticated ? <Home setAuth={setIsAuthenticated} /> : <Navigate to="/home" replace />} 
                        />
                        <Route 
                            path="/home" 
                            element={isAuthenticated ? <MainPage /> : <Navigate to="/" replace />} 
                        />

                        {/* 🔹 Pages accessibles après connexion */}
                        {isAuthenticated && (
                            <>
                                <Route 
                                    path="/tweets" 
                                    element={
                                        <>
                                            <TweetInput onTweet={handleNewTweet} />
                                            {tweets.map((tweet) => (
                                                <Tweet key={tweet.id} {...tweet} toggleFavorite={toggleFavorite} />
                                            ))}
                                        </>
                                    } 
                                />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/notifications" element={<Notifications />} />
                                <Route path="/favoris" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
                            </>
                        )}

                        {/* 🔹 Redirection par défaut */}
                        <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/"} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
