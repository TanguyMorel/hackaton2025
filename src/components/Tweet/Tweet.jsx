import React, { useState } from "react";
import "./Tweet.css";
// import { likeTweet } from "../../utils/tweetAction.js";

const api_uri = import.meta.env.VITE_API_URI;

const Tweet = ({
  id,
  name,
  username,
  content,
  time,
  avatar,
  media,
  mediaType,
  liked,
  likes,
  toggleFavorite, 
}) => {

  const [retweets, setRetweets] = useState(0);
  const [localLikes, setLocalLikes] = useState(likes); 

  return (
    <div className="tweet">
      <img src={avatar} alt={name} className="tweet-avatar" />
      <div className="tweet-content">
        <div className="tweet-header">
          <strong>{name}</strong> <span>@{username} · {time}</span>
        </div>
        <p className="tweet-text">{content}</p>

        {/* Gestion des médias */}
        {media && (
          <div className="tweet-media">
            {mediaType === "image" && (
              <img src={`${api_uri}static/${media}`} alt="tweet media" />
            )}
            {mediaType === "gif" && (
              <img src={media} alt="tweet gif" />
            )}
            {mediaType === "video" && (
              <video controls>
                <source src={media} type="video/mp4" />
                Votre navigateur ne supporte pas les vidéos.
              </video>
            )}
          </div>
        )}

        <div className="tweet-cta">
          <button onClick={() => setLocalLikes(localLikes + 1)}>❤️ {localLikes}</button>
          <button onClick={() => setRetweets(retweets + 1)}>🔁 {retweets}</button>
          <button onClick={() => toggleFavorite(id)}>
            {liked ? "⭐️ Retirer des favoris" : "🌟 Ajouter aux favoris"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
