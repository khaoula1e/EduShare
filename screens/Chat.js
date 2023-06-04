import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { userChats } from '../../services/chat-service';
import AuthService from '../services/auth.service';
import Conversation from '../../components/Conversations/Conversation';
import Chatbox from '../../components/Chatbox/Chatbox';
import { getNotifications } from '../../services/notification-service';
import io from 'socket.io-client';

const Chat = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const socket = useRef(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(currentUser?.id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [currentUser?.id]);

  useEffect(() => {
    socket.current = io('http://192.168.137.1:8800');

    socket.current.emit('new-user-add', currentUser?.id);
    socket.current.on('get-users', (users) => {
      setOnlineUsers(users);
    });
  }, [currentUser?.id]);

  useEffect(() => {
    socket.current.on('recieve-message', (data) => {
      setReceivedMessage(data);
    });
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await getNotifications(currentUser?.id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotifications();
  }, [currentUser?.id]);

  return (
    <View>
      <View style={styles.container}>
        {/* Left Side */}
        <View style={styles.leftSideChat}>
          <View style={styles.chatContainer}>
            <Text style={styles.title}>Chats</Text>
            <View style={styles.chatList}>
              {chats?.map((chat) => (
                <View
                  key={chat.id}
                  onTouchEnd={() => setCurrentChat(chat)}
                >
                  <Conversation
                    data={chat}
                    currentUserId={currentUser.id}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
        {/* Right Side */}
        <View style={styles.rightSideChat}>
          <Chatbox
            chat={currentChat}
            currentUser={currentUser?.id}
            setSendMessage={setSendMessage}
            receivedMessage={receivedMessage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSideChat: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  chatContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chatList: {
    flex: 1,
  },
  rightSideChat: {
    flex: 2,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
};


export default Chat;
