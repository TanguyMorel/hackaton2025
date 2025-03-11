import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Feed.css";

const Feed = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        const fetchTweets = async () => {
            const response = await axios.get("http://localhost:5000/api/tweets");
            setTweets(response.data);
        };
        fetchTweets();
    }, []);

    return (
        <div className="feed">
            <h2>Fil d'actualité</h2>
            {tweets.map((tweet) => (
                <div key={tweet.id} className="tweet">
                    <p>{tweet.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Feed;

