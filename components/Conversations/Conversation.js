import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { getUser } from '../../services/user.service';
import io from 'socket.io-client';

const socket = io('http://192.168.137.1:8800');

function Conversation({ data, currentUserId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    console.log(userId);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  return (
    <View>
      <View style={styles.follower}>
        <View style={styles.userInfo}>
          <Image
            source={{
              uri:
                'https://t3.ftcdn.net/jpg/05/79/55/26/360_F_579552668_sZD51Sjmi89GhGqyF27pZcrqyi7cEYBH.jpg',
            }}
            style={styles.followerImage}
          />
          <Text style={styles.name}>{userData?.username}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = {
  follower: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'info',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontSize: 16,
    color: 'black',
  },
};

export default Conversation;
