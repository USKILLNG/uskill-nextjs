"use client";

import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Welcome to USKILL!", message: "Start your first course today.", type: "info", read: false, time: "2m ago" },
    { id: 2, title: "Payment Successful", message: "Your purchase of 'React Mastery' was confirmed.", type: "success", read: false, time: "1h ago" },
    { id: 3, title: "New Course Alert", message: "Dr. Angela just released a new Python module.", type: "alert", read: true, time: "1d ago" }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, markAsRead, markAllAsRead, clearNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications = () => useContext(NotificationContext);