import React, {useState} from 'react';
import axiosInstance from '../../utils/axios';
import './Notification.css';
import useNotification from "../../utils/hook/useNotification.js";
import NotificationItem from "./NotificationItem.jsx";
import {modifyNotification} from "../../utils/reducer/notification.js";
import {useDispatch, useSelector} from "react-redux";

const Notification = () => {
    const dispatch = useDispatch();
    const notifications = useSelector((state) => state.notification.value)
    const [notificationPreferences, setNotificationPreferences] = useState({
        like: false,
        follow: true,
    });


    const markAsRead = async (notificationId) => {
        try {
            await axiosInstance.put(`notification/${notificationId}/read`);
            dispatch(modifyNotification({_id: notificationId, isRead: true}));

            // setNotifications(notifications.map(n => n._id === notificationId ? { ...n, isRead: true } : n));
        } catch (error) {
            console.error('Erreur lors du marquage de la notification comme lue:', error);
        }
    };

    const toggleNotification = async (preferences) => {
        try {
            await axiosInstance.post('notification/toggle', {notificationPreferences: preferences});
        } catch (error) {
            console.error('Erreur lors de la modification des préférences de notification:', error);
            if (error.response) {
                console.error('Détails de l\'erreur:', error.response.data);
            }
        }
    };

    const handlePreferenceChange = (e) => {
        const {name, checked} = e.target;
        const updatedPreferences = {...notificationPreferences, [name]: checked};
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
            <div className="flex gap-4 items-center mb-2">
                <h1 className="text-xl">Notifications</h1>
                <button
                    id="mark-all-read"
                    className="bg-blue-400 rounded-[5px] px-4 h-[40px]"
                    onClick={markAllAsRead}
                >
                    Marquer tout comme lu
                </button>
            </div>
            <div id="notification-list" className="flex flex-col gap-1">
                {notifications.map((notification, i) => (
                    <NotificationItem key={i} notification={notification} markAsRead={markAsRead}/>
                ))}
            </div>

            <div className="notification-settings mt-4 flex gap-6">
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
