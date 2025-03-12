import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axios';
import './Notification.css';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [notificationPreferences, setNotificationPreferences] = useState({
    like: false,
    follow: true,
  });

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axiosInstance.get('notification');
        setNotifications(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des notifications:', error);
        if (error.response) {
          console.error('Réponse du serveur:', error.response.data);
        }
      }
    };

    fetchNotifications();
  }, []);

  const markAsRead = async (notificationId) => {
    try {
      await axiosInstance.put(`notification/${notificationId}/read`);
      setNotifications(notifications.map(n => n._id === notificationId ? { ...n, isRead: true } : n));
    } catch (error) {
      console.error('Erreur lors du marquage de la notification comme lue:', error);
    }
  };

  const toggleNotification = async (preferences) => {
    try {
      await axiosInstance.post('notification/toggle', { notificationPreferences: preferences });
    } catch (error) {
      console.error('Erreur lors de la modification des préférences de notification:', error);
      if (error.response) {
        console.error('Détails de l\'erreur:', error.response.data);
      }
    }
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    const updatedPreferences = { ...notificationPreferences, [name]: checked };
    setNotificationPreferences(updatedPreferences);
    toggleNotification(updatedPreferences);
  };

  const markAllAsRead = async () => {
    for (const notification of notifications) {
      if (!notification.isRead) {
        await markAsRead(notification._id);
      }
    }
  };

  return (
    <div className="notification-container">
      <h2>Notifications</h2>
      <ul id="notification-list">
        {notifications.map(notification => (
          <li key={notification._id} className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}>
            <strong>{notification.type}</strong>: {notification.message}
            <span className="notification-time">{new Date(notification.createdAt).toLocaleString()}</span>
            {!notification.isRead && <button onClick={() => markAsRead(notification._id)}>Marquer comme lu</button>}
          </li>
        ))}
      </ul>
      <button id="mark-all-read" onClick={markAllAsRead}>Marquer tout comme lu</button>
      <div className="notification-settings">
        <label>
          <input
            type="checkbox"
            name="like"
            checked={notificationPreferences.like}
            onChange={handlePreferenceChange}
          />
          Notifications de "Like"
        </label>
        <label>
          <input
            type="checkbox"
            name="follow"
            checked={notificationPreferences.follow}
            onChange={handlePreferenceChange}
          />
          Notifications de "Follow"
        </label>
      </div>
    </div>
  );
};

export default Notification;
