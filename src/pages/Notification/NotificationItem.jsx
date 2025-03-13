import React from 'react';

function NotificationItem({notification, markAsRead}) {
    return (
        <div className="flex gap-4 justify-between h-[40px] items-center">
            <p>
                <a href="#" className="text-blue-600">
                    {notification.sender.username + " "}
                </a>
                <strong>{notification.type + " "}</strong>
                {notification.tweet &&
                    `votre Tweet : "${notification.tweet.content}"`
                }
            </p>
            {/*<span className="notification-time">{new Date(notification.createdAt).toLocaleString()}</span>*/}
            {!notification.isRead &&
                <button
                    className="bg-blue-400 rounded-[5px] w-[40px] h-[40px]"
                    onClick={() => markAsRead(notification._id)}
                >
                    lu
                </button>
            }

        </div>
    );
}

export default NotificationItem;