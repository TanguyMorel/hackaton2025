import React from "react";
import "./Profile.css";
import Tweet from "../../components/Tweet/Tweet";
import {useSelector} from "react-redux";
import useUserProfile from "../../utils/hook/useUserProfile.js";
import {useParams} from "react-router-dom";
import {differenceEnHeures} from "../../utils/date.js";
import {likeTweet, saveTweet} from "../../utils/tweetAction.js";

const Profile = () => {

    const {id} = useParams();

    const currentUser = useSelector((state) => state.user.value)

    const {user, tweets} = useUserProfile(id? id : currentUser?._id)


    if (!user) return ;

    console.log(tweets)

    return (
        <div className="profile flex flex-col overflow-hidden h-full">
            <div className="profile-banner">
                <img src={user.banner || ""} alt="Bannière de profil"/>
            </div>
            <div className="profile-info">
                <img src={user.avatar || "https://i.pinimg.com/736x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"} alt="Avatar" className="profile-avatar"/>
                <h2 className="text-black">{user.username}</h2>
                <p className="profile-username">@{user.username}</p>
                <p className="profile-bio text-black">{user.bio}</p>
                <div className="profile-details">
                    <span>📅 Membre depuis {new Date(user.createdAt).toLocaleDateString()}</span>
                    <span>👥 {user.following.length} abonnements</span>
                    <span>🎉 {user.followers.length} abonnés</span>
                </div>
            </div>

            <div className="profile-tweets flex-1 flex flex-col overflow-hidden">
                <h3 className="text-black">Mes Tweets</h3>
                <div className="flex-1 overflow-y-auto">

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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
