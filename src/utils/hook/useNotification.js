import axiosInstance from "../axios.js";
import {useDispatch, useSelector} from "react-redux";
import {addNewNotification, modifyNotification, setNotification} from "../reducer/notification.js";
import {useEffect} from "react";
import socket from "../socket.js";

const useNotification = () => {
    const notifications = useSelector((state) => state.notification.value)
    const dispatch = useDispatch()

    const fetchNotifications = async () => {
        try {
            const response = await axiosInstance.get('notification');
            console.log(response)
            dispatch(setNotification(response.data));
        } catch (error) {
            console.error('Erreur lors de la récupération des notifications:', error);
            if (error.response) {
                console.error('Réponse du serveur:', error.response.data);
            }
        }
    };

    useEffect(() => {
        (async () => {
           await fetchNotifications();
           socket.on('notification', (notification) => {
               console.log("Teste")
               dispatch(addNewNotification(notification));
           })
        })()
        return () => {
            socket.off('notification');
        }
    }, []);

    const updateNotification = async (notificationId) => {
        try {
            await axiosInstance.put(`notification/${notificationId}/read`);
            dispatch(modifyNotification({_id: notificationId, isRead: true}));
        } catch (error) {
            console.error('Erreur lors du marquage de la notification comme lue:', error);
        }
    }

    return {
        notifications,
        updateNotification,
    }
}

export default useNotification;