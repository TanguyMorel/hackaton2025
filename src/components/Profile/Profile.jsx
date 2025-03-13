import React, {useState} from "react";
import "./Profile.css";
import Tweet from "../../components/Tweet/Tweet";
import {useSelector} from "react-redux";
import useUserProfile from "../../utils/hook/useUserProfile.js";
import {useParams} from "react-router-dom";
import {differenceEnHeures} from "../../utils/date.js";
import {likeTweet, saveTweet} from "../../utils/tweetAction.js";
import axios from "../../utils/axios.js";


const Profile = () => {
    const {id} = useParams();
    const currentUser = useSelector((state) => state.user.value)
    const {user, tweets} = useUserProfile(id ? id : currentUser?._id)
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(null);
    const [error, setError] = useState("");

    if (!user) return null;

    const handleEditClick = () => {
        setEditedUser({
            username: user.username,
            bio: user.bio
        });
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("Vous devez être connecté pour modifier votre profil");
                return;
            }

            const response = await axios.put(`users/update/${currentUser._id}`,
                editedUser,
            );

            if (response.status === 200) {
                setIsEditing(false);
                // Recharger la page pour voir les changements
                window.location.reload();
            }
        } catch (err) {
            setError(err.response?.data?.message || "Une erreur est survenue lors de la mise à jour");
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedUser(null);
        setError("");
    };

    const isOwnProfile = !id || id === currentUser?._id;

    console.log(tweets)

    return (
        <div className="profile flex flex-col overflow-hidden h-full">
            <div className="profile-banner">
                <img src={user.banner || ""} alt="Bannière de profil"/>
            </div>
            <div className="profile-info">
                <img src={user.avatar || "https://i.pinimg.com/736x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"}
                     alt="Avatar" className="profile-avatar"/>

                {isEditing ? (
                    <div className="edit-profile-form">
                        <input
                            type="text"
                            value={editedUser.username}
                            onChange={(e) => setEditedUser({...editedUser, username: e.target.value})}
                            className="profile-input"
                            placeholder="Nom d'utilisateur"
                        />
                        <textarea
                            value={editedUser.bio}
                            onChange={(e) => setEditedUser({...editedUser, bio: e.target.value})}
                            className="profile-textarea"
                            placeholder="Bio"
                            maxLength={160}
                        />
                        <div className="profile-actions">
                            <button onClick={handleSave} className="profile-save-btn">Enregistrer</button>
                            <button onClick={handleCancel} className="profile-cancel-btn">Annuler</button>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                    </div>
                ) : (
                    <>
                        <h2 className="text-black">{user.username}</h2>
                        <p className="profile-username">@{user.username}</p>
                        <p className="profile-bio text-black">{user.bio}</p>
                        {isOwnProfile && (
                            <button onClick={handleEditClick} className="profile-edit-btn">
                                Modifier le profil
                            </button>
                        )}
                    </>
                )}

                <div className="profile-details">
                    <span>📅 Membre depuis {new Date(user.createdAt).toLocaleDateString()}</span>
                    <span>👥 {user.following.length} abonnements</span>
                    <span>🎉 {user.followers.length} abonnés</span>
                </div>
            </div>

            <div className="profile-tweets flex-1 flex flex-col overflow-hidden">
                <h3 className="text-black">Tweets</h3>
                <div className="flex-1 overflow-y-auto px-1">
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
