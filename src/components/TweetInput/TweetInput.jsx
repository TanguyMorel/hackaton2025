import React, { useState } from "react";
import "./TweetInput.css";

const TweetInput = ({ onTweet }) => {
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type.startsWith("image") ? "image" : file.type.startsWith("video") ? "video" : "";
      setMediaType(fileType);
      setMedia(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() || media) {
      onTweet({
        name: "Moi",
        username: "monpseudo",
        content: text,
        time: "Maintenant",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        media,
        mediaType
      });
      setText("");
      setMedia(null);
      setMediaType("");
    }
  };

  return (
    <div className="tweet-input text-black">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Quoi de neuf ?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {/* Affichage de la prévisualisation du média */}
        {media && (
          <div className="tweet-preview">
            {mediaType === "image" && <img src={media} alt="prévisualisation" />}
            {mediaType === "video" && (
              <video controls>
                <source src={media} type="video/mp4" />
                Votre navigateur ne supporte pas les vidéos.
              </video>
            )}
          </div>
        )}

        <div className="tweet-actions">
          <label className="file-upload">
            📎 Ajouter un média
            <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
          </label>
          <button type="submit" className="tweet-input-btn">Tweet</button>
        </div>
      </form>
    </div>
  );
};

export default TweetInput;
