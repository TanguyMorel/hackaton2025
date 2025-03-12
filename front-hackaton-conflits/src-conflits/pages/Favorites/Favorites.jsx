import React from "react";
import Tweet from "../../components/Tweet/Tweet";

const FavoritesPage = ({ tweets, toggleFavorite }) => {
  const favoriteTweets = tweets.filter(tweet => tweet.liked);

  return (
    <div className="favorites">
      <h2>Mes Favoris ⭐</h2>
      {favoriteTweets.length === 0 ? (
        <p>Aucun tweet en favoris.</p>
      ) : (
        favoriteTweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} toggleFavorite={toggleFavorite} />
        ))
      )}
    </div>
  );
};

export default FavoritesPage;
