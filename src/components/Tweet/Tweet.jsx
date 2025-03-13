import React, {useState} from "react";
import "./Tweet.css";
import {useNavigate} from "react-router-dom";
import Webcam from "react-webcam";
import {likeTweet, reTweet, saveTweet} from "../../utils/tweetAction.js";
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
                   retweets,
                   likes,
                   userId,
                   onRead,
    saved,
               }) => {
    const navigate = useNavigate();

    const [timer, setTimer] = useState(null);


    const handleMouseEnter = () => {
        const newTimer = setTimeout(() => {
            onRead(id)
        }, content.length * 80);
        setTimer(newTimer);
    };

    const handleMouseLeave = () => {
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
    };


    return (
        <div className="tweet opacity-[0.4]"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
        >
            <img src={avatar || "https://i.pinimg.com/736x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"} alt={name}
                 className="tweet-avatar"/>
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
                            <img src={`${api_uri}static/${media}`} alt="tweet media"/>
                        )}
                        {mediaType === "gif" && (
                            <img src={media} alt="tweet gif"/>
                        )}
                        {mediaType === "video" && (
                            <video controls>
                                <source src={media} type="video/mp4"/>
                                Votre navigateur ne supporte pas les vidéos.
                            </video>
                        )}
                    </div>
                )}

                <div className="tweet-cta">
                    <button onClick={() => likeTweet(id)}>❤️ {likes}</button>
                    <button onClick={() => reTweet(id)}>🔁 {retweets}</button>
                    <button onClick={() => saveTweet(id)}>
                        {saved ? "⭐️ Retirer des favoris" : "🌟 Ajouter aux favoris"}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Tweet;
