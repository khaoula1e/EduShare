import axios from "axios";
import authHeader from "./auth-header";

const API = "http://192.168.137.1:8080/api";

export const createChat = (data) => {
  return axios.post(API + "/chats", data, { headers: authHeader() });
};

export const userChats = (id) => {
  return axios.get(API + "/chat/" + id, { headers: authHeader() });
};

export const findChat = (firstId, secondId) => {
  return axios.get(API + `/chat/find/${firstId}/${secondId}`, {
    headers: authHeader(),
  });
};