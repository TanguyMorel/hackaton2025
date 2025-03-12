import React, { useState } from "react";
import "./Tweet.css";

const Tweet = ({ id, name, username, content, time, avatar, media, mediaType, liked, toggleFavorite }) => {
  const [likes, setLikes] = useState(0);
  const [retweets, setRetweets] = useState(0);

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
            {mediaType === "image" && <img src={media} alt="tweet media" />}
            {mediaType === "gif" && <img src={media} alt="tweet gif" />}
            {mediaType === "video" && (
              <video controls>
                <source src={media} type="video/mp4" />
                Votre navigateur ne supporte pas les vidéos.
              </video>
            )}
          </div>
        )}

        <div className="tweet-actions">
          <button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>
          <button onClick={() => setRetweets(retweets + 1)}>🔁 {retweets}</button>
          <button onClick={() => toggleFavorite(id)}>
            {liked ? "💖 Retirer des favoris" : "❤️ Ajouter aux favoris"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
