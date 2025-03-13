import React, { useState } from "react";
import "./Tweet.css";
import {useNavigate} from "react-router-dom";
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
  userId
}) => {
  const navigate = useNavigate();

  const [retweets, setRetweets] = useState(0);
  const [localLikes, setLocalLikes] = useState(likes); 

  return (
    <div className="tweet">
      <img src={avatar || "https://i.pinimg.com/736x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"} alt={name} className="tweet-avatar" />
      <div className="tweet-content">
        <div className={`tweet-header ${userId && "cursor-pointer"}`} onClick={() => {
          if (userId)
          navigate(`/profile/${userId}`)
        }}>
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
          <button onClick={() => setLocalLikes(localLikes + 1)}>❤️ {likes}</button>
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
