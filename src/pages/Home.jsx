import "../styles/Home.css";
import TweetInput from "../components/TweetInput/TweetInput.jsx";
import Tweet from "../components/Tweet/Tweet.jsx";
import React, {useCallback, useRef} from "react";
import { differenceEnHeures } from "../utils/date.js";
import { useSelector } from "react-redux";
import useLastTweet from "../utils/hook/useLastTweet.js";
import {emotionTweet, likeTweet, postTweet, saveTweet} from "../utils/tweetAction.js";
import Webcam from "react-webcam";

const Home = () => {
  const { tweets } = useLastTweet();
  const user = useSelector((state) => state.user.value);

  const submitTweet = (data) => {
    postTweet(data.content, data.media);
  };

  // -----------------------------------

    const webcamRef = useRef(null);

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const capture = useCallback(
        (id) => {
            const imageSrc = webcamRef.current.getScreenshot();

            emotionTweet(id, imageSrc);
        },
        [webcamRef]
    );


  return (
    <div className="feed flex flex-col gap-8 h-full overflow-hidden">
      <TweetInput onTweet={submitTweet} />
        <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
            style={{width: 100, height: 100, position: 'absolute', opacity: 0, zIndex:-1}}
        />
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
            toggleFavorite={likeTweet}
            saveTweet={saveTweet}
            likes={tweet.likes.length}
            retweets={tweet.retweets.length}
            userId={tweet.author?._id}
            saved={user && tweet.saved.includes(user._id)}
            onRead={capture}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
