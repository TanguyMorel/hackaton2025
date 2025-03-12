import React from "react";
import "./Notifications.css";

const notifications = [
  { type: "like", user: "Alice", content: "a aimé votre tweet", time: "2h" },
  { type: "retweet", user: "Bob", content: "a retweeté votre tweet", time: "5h" },
  { type: "follow", user: "Charlie", content: "a commencé à vous suivre", time: "1j" },
  { type: "tweet", user: "David", content: "a posté un nouveau tweet", time: "3j" }
];

const getNotificationIcon = (type) => {
  switch (type) {
    case "like":
      return "❤️";
    case "retweet":
      return "🔁";
    case "follow":
      return "👥";
    case "tweet":
      return "📝";
    default:
      return "🔔";
  }
};

const Notifications = () => {
  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>Aucune notification pour le moment.</p>
      ) : (
        notifications.map((notif, index) => (
          <div key={index} className="notification-item">
            <span className="notification-icon">{getNotificationIcon(notif.type)}</span>
            <p>
              <strong>{notif.user}</strong> {notif.content} <span className="notification-time">· {notif.time}</span>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Notifications;
