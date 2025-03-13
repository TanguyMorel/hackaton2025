import "../styles/Home.css";
import TweetInput from "../components/TweetInput/TweetInput.jsx";
import Tweet from "../components/Tweet/Tweet.jsx";
import React from "react";
import axios from "../utils/axios.js";
import { differenceEnHeures } from "../utils/date.js";
import { useSelector } from "react-redux";
import useLastTweet from "../utils/hook/useLastTweet.js";
import { postTweet } from "../utils/tweetAction.js";

const Home = () => {
  const { tweets } = useLastTweet();
  const user = useSelector((state) => state.user.value);

  const submitTweet = (data) => {
    // console.log(data);
    postTweet(data.content, data.media);
    // setTweets(x => [...x, data]);
  };

  const toggleFavorite = async (id) => {
    await axios.put(`tweet/like/${id}`);
  };

  return (
    <div className="feed">
      <TweetInput onTweet={submitTweet} />
      <div className="tweets-wrapper">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            {...tweet}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        {tweets.map((tweet, i) => (
          <Tweet
            key={i}
            id={tweet._id}
            name={tweet.author?.username || "Deleted"}
            username={tweet.author?.username || "Deleted"}
            content={tweet.content}
            time={`${differenceEnHeures(new Date(), new Date(tweet.createdAt))}H`}
            avatar={tweet.author?.avatar}
            media={tweet.media}
            mediaType={tweet.mediaType}
            liked={user && tweet.likes.includes(user._id)}
            toggleFavorite={toggleFavorite}
            likes={tweet.likes.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
