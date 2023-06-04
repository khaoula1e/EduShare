import axios from "axios";
import authHeader from "./auth-header";

const API = "http://192.168.137.1:8080/notifications";

export const getNotifications = (id) => {
  return axios.get(API + "/" + id, { headers: authHeader() });
};
export const addNotification = (notification) => {
  return axios.post(API, notification, { headers: authHeader() });
};
export const deleteAllNotifications = (id) => {
  return axios.delete(API + "/" + id, { headers: authHeader() });
};