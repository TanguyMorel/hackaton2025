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
        <div className="feed">
            <TweetInput onTweet={submitTweet}/>
            <div className="tweets-wrapper">
                {tweets.map((tweet) => <Tweet key={tweet.id} {...tweet} toggleFavorite={toggleFavorite}/>
                )}
            </div>
        </div>
    );
};

export default Home;

