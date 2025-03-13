import { useState, useEffect } from "react";
import axios from "../utils/axios.js";
import "../styles/Profile.css";
import {useSelector} from "react-redux";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");

  const currentUser = useSelector((state) => state.user.value)


  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])

  // Charge les infos du profil depuis le backend
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get("users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
        setUsername(response.data.username);
        setBio(response.data.bio || "");
        setAvatar(response.data.avatar || "/default-avatar.png");
      } catch (error) {
        console.error("Erreur lors du chargement du profil :", error);
      }
    };

    fetchUser();
  }, []);

  // Fonction de mise à jour du profil
  const handleUpdateProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await axios.put("users/me", { username, bio }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Profil mis à jour !");
      setUser((prev) => ({ ...prev, username, bio }));
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil :", error);
    }
  };

  return (
    <div className="profile-container">
      {user ? (
        <>
          <h2>Profil de {user.username}</h2>
          <img src={avatar} alt="Avatar" className="profile-avatar" />
          <div className="profile-inputs">
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Modifier votre nom d'utilisateur" 
            />
            <textarea 
              value={bio} 
              onChange={(e) => setBio(e.target.value)} 
              placeholder="Ajoutez une bio..." 
            />
          </div>
          <button onClick={handleUpdateProfile}>Mettre à jour</button>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default Profile;
