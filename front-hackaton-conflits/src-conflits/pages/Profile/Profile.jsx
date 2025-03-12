import React from "react";
import "./Profile.css";
import Tweet from "../../components/Tweet/Tweet";

const user = {
  name: "Moi",
  username: "monpseudo",
  avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  banner: "https://source.unsplash.com/random/800x300/?landscape",
  bio: "Développeur React passionné 🚀 | Amoureux du code ❤️",
  following: 150,
  followers: 1200,
  joinDate: "Janvier 2023"
};

const userTweets = [
  {
    name: user.name,
    username: user.username,
    content: "Mon premier tweet sur ce clone ! 🚀",
    time: "2h",
    avatar: user.avatar
  },
  {
    name: user.name,
    username: user.username,
    content: "React, c'est vraiment puissant ! ⚛️",
    time: "1j",
    avatar: user.avatar
  },
  {
    name: user.name,
    username: user.username,
    content: "Bientôt une vraie API pour ce projet... 😉",
    time: "3j",
    avatar: user.avatar
  }
];

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-banner">
        <img src={user.banner} alt="Bannière de profil" />
      </div>
      <div className="profile-info">
        <img src={user.avatar} alt="Avatar" className="profile-avatar" />
        <h2>{user.name}</h2>
        <p className="profile-username">@{user.username}</p>
        <p className="profile-bio">{user.bio}</p>
        <div className="profile-details">
          <span>📅 Membre depuis {user.joinDate}</span>
          <span>👥 {user.following} abonnements</span>
          <span>🎉 {user.followers} abonnés</span>
        </div>
      </div>

      <div className="profile-tweets">
        <h3>Mes Tweets</h3>
        {userTweets.map((tweet, index) => (
          <Tweet key={index} {...tweet} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
