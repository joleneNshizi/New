// Notification.js
import React, { useState } from 'react';
import {
  NotificationContainer,
  Notification as StyledNotification,
  CloseButton,
} from './style'; // Adjust the import path accordingly

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = (type, message) => {
    const newNotification = { id: Date.now(), type, message };
    setNotifications([...notifications, newNotification]);

    // Automatically hide the notification after a certain duration (e.g., 5 seconds)
    setTimeout(() => {
      hideNotification(newNotification.id);
    }, 5000);
  };

  const hideNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <NotificationContainer>
      {notifications.map((notification) => (
        <StyledNotification key={notification.id} type={notification.type}>
          {notification.message}
          <CloseButton onClick={() => hideNotification(notification.id)}>&times;</CloseButton>
        </StyledNotification>
      ))}
    </NotificationContainer>
  );
};

export default Notification;
