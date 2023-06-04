import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import { addMessage, getMessages } from '../services/message-service';
import { addNotification } from '../services/notification-service';
import UserService from '../services/user.service';
import EmojiSelector from 'react-native-emoji-picker';

const Chatbox = ({ chat, currentUser, setSendMessage, receivedMessage }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const scroll = useRef(null);
  const imageRef = useRef(null);
  const [text, setText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Always scroll to last Message
  useEffect(() => {
    scroll.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat.id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);

  const handleSend = async () => {
    const receiverId = chat.members.find((id) => id !== currentUser);
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat.id,
    };
    const notification = {
      sender: currentUser,
      receiver: receiverId,
      msg: newMessage,
      read: false,
    };

    // send message to socket server
    setSendMessage({ ...message, receiverId });

    // send message to database
    try {
      const { data } = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage('');
    } catch (error) {
      console.log(error);
    }

    try {
      const { data } = await addNotification(notification);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Receive Message from parent component
  useEffect(() => {
    console.log('Message Arrived: ', receivedMessage);
    if (
      receivedMessage !== null &&
      receivedMessage.chatId === chat?.id &&
      receivedMessage.senderId !== currentUser
    ) {
      setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessage]);

  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await UserService.getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  const handleEmojiSelected = (emoji) => {
    setNewMessage(newMessage + emoji);
  };

  return (
    <>
      <View style={styles.chatBoxContainer}>
        {chat ? (
          <>
            {/* chat-header */}
            <View style={styles.chatHeader}>
              <View style={styles.follower}>
                <View style={styles.userInfo}>
                  <Image
                    source={{
                      uri:
                        'https://t3.ftcdn.net/jpg/05/79/55/26/360_F_579552668_sZD51Sjmi89GhGqyF27pZcrqyi7cEYBH.jpg',
                    }}
                    style={styles.userImage}
                  />
                  <Text style={styles.username}>{userData?.username}</Text>
                </View>
              </View>
              <View style={styles.divider} />
            </View>
            {/* chat-body */}
            <ScrollView style={styles.chatBody} ref={scroll}>
              {messages?.map((message, index) => (
                <View
                  key={index}
                  style={
                    message.senderId === currentUser
                      ? styles.ownMessage
                      : styles.message
                  }
                >
                  <Text>{message.text}</Text>
                  {/* <Text>{message.createdAt}</Text> */}
                </View>
              ))}
            </ScrollView>
            {/* chat-sender */}
            <View style={styles.chatSender}>
              <TouchableOpacity onPress={() => imageRef.current.click()}>
                <Text>+</Text>
              </TouchableOpacity>
              <TextInput
                value={newMessage}
                onChangeText={handleChange}
                onFocus={() => setShowEmojiPicker(false)}
              />
              <Button
                title="😀"
                onPress={() => setShowEmojiPicker(!showEmojiPicker)}
              />
              <Button title="Send" onPress={handleSend} />
              <TextInput
                style={{ display: 'none' }}
                ref={imageRef}
              />
              {showEmojiPicker && (
                <EmojiSelector
                  onEmojiSelected={handleEmojiSelected}
                  showSearchBar={false}
                />
              )}
            </View>
          </>
        ) : (
          <Text style={styles.chatboxEmptyMessage}>
            Tap on a chat to start a conversation...
          </Text>
        )}
      </View>
    </>
  );
};

const styles = {
  chatBoxContainer: {
    flex: 1,
  },
  chatHeader: {
    padding: 10,
  },
  follower: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    fontSize: 16,
    color: 'black',
  },
  divider: {
    borderWidth: 0.1,
    borderColor: 'black',
    marginTop: 20,
  },
  chatBody: {
    flex: 1,
    padding: 10,
  },
  message: {
    marginBottom: 10,
  },
  ownMessage: {
    marginBottom: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  chatSender: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 0.1,
    borderTopColor: 'black',
  },
  chatboxEmptyMessage: {
    textAlign: 'center',
    marginTop: 20,
  },
};

export default Chatbox;
