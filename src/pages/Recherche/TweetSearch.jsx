import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../utils/axios";

export default function TweetSearch() {
  const [tweets, setTweets] = useState([]);

  // Récupération du paramètre de recherche dans l'URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search") || ""; // Valeur par défaut = ""

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get("/tweet/all");
        setTweets(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des tweets :", error);
      }
    };

    fetchTweets();
  }, []);

  // Filtrer et trier les tweets par likes
  const filteredTweets = tweets
    .filter(tweet => tweet.content.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => (b.likes || 0) - (a.likes || 0));

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tweets les plus likés {query && ` - Recherche : "${query}"`}</h2>
      {filteredTweets.map((tweet) => (
        <div key={tweet.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
          <p>{tweet.content}</p>
          <p>❤️ {tweet.likes} likes</p>
        </div>
      ))}
    </div>
  );
}
