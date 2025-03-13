import React, {useEffect} from "react";
import "./Profile.css";
import Tweet from "../../components/Tweet/Tweet";
import {useSelector} from "react-redux";

const user = {
    name: "Moi",
    username: "monpseudo",
    avatar: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    banner: "https://media.istockphoto.com/id/479199262/fr/photo/plein-cadre-photo-de-langleterre.jpg?s=2048x2048&w=is&k=20&c=t-dB3Nq4Mbwr6GdSPCoVhP80Qshf_UNefyG0-QCzDE8=",
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

    const currentUser = useSelector((state) => state.user.value)


    useEffect(() => {
        console.log(currentUser)
    }, [currentUser])

    return (
        <div className="profile flex flex-col overflow-hidden h-full">
            <div className="profile-banner">
                <img src={user.banner} alt="Bannière de profil"/>
            </div>
            <div className="profile-info">
                <img src={currentUser.avatar || "https://i.pinimg.com/736x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"} alt="Avatar" className="profile-avatar"/>
                <h2 className="text-black">{currentUser.username}</h2>
                <p className="profile-username">@{currentUser.username}</p>
                <p className="profile-bio text-black">{currentUser.bio}</p>
                <div className="profile-details">
                    <span>📅 Membre depuis {new Date(currentUser.createdAt).toLocaleDateString()}</span>
                    <span>👥 {currentUser.following.length} abonnements</span>
                    <span>🎉 {currentUser.followers.length} abonnés</span>
                </div>
            </div>

            <div className="profile-tweets flex-1 flex flex-col overflow-hidden">
                <h3 className="text-black">Mes Tweets</h3>
                <div className="flex-1 overflow-y-auto">

                    {userTweets.map((tweet, index) => (
                        <Tweet key={index} {...tweet} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
