import "../styles/Home.css";
import TweetInput from "../components/TweetInput/TweetInput.jsx";
import Tweet from "../components/Tweet/Tweet.jsx";
import React from "react";
import { differenceEnHeures } from "../utils/date.js";
import { useSelector } from "react-redux";
import useLastTweet from "../utils/hook/useLastTweet.js";
import {likeTweet, postTweet} from "../utils/tweetAction.js";

const Home = () => {
  const { tweets } = useLastTweet();
  const user = useSelector((state) => state.user.value);

  const submitTweet = (data) => {
    postTweet(data.content, data.media);
  };

  return (
    <div className="feed flex flex-col gap-8 h-full overflow-hidden">
      <TweetInput onTweet={submitTweet} />
      <div className="tweets-wrapper flex flex-col flex-1 overflow-y-auto">
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
            toggleFavorite={likeTweet}
            likes={tweet.likes.length}
            userId={tweet.author?._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
