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
        <div className="flex flex-col h-full">
            <TweetInput onTweet={submitTweet}/>
            <div className="flex flex-col flex-1 overflow-y-auto">
                {tweets.map((tweet) => <Tweet key={tweet.id} {...tweet} toggleFavorite={toggleFavorite}/>
                )}
            </div>
        </div>
    );
};

export default Home;

