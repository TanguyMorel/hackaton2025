import { useState, useEffect } from "react";
import axios from "../utils/axios.js";
import "../styles/Feed.css";
import Tweet from "./Tweet/Tweet.jsx"; 

const Feed = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        const fetchTweets = async () => {
            const response = await axios.get("tweet");
            setTweets(response.data);
        };
        fetchTweets();
    }, []);

    return (
        <div className="feed">
            <h2>Fil d'actualité</h2>
            
                {tweets.map((tweet) => (
                    <Tweet 
                        key={tweet.id} 
                        id={tweet.id} 
                        name={tweet.name} 
                        username={tweet.username} 
                        content={tweet.content} 
                        time={tweet.time} 
                        avatar={tweet.avatar} 
                        media={tweet.media} 
                        mediaType={tweet.mediaType} 
                        liked={tweet.liked} 
                        likes={tweet.likes} 
                        toggleFavorite={() => {}}
                        userId={tweet.userId}
                    />
                ))}
        </div>
    );
};

export default Feed;
