import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Profile = ({ route, navigation }) => {
  const { userId } = route.params;
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://192.168.137.1:8080/api/auth/user/${userId}`);
        setUserInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.log('Error:', error);
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [userId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!userInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: User not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        {/* <Image style={styles.profileImage} source={userInfo.image} /> */}
        <Image style={styles.logoImage} source={require('../assets/images/profile.png')} />
        <Text style={styles.usernameText}>{userInfo.username}</Text>
      </View>
      <View style={styles.section2}>
        <Text style={styles.infoText}>Full Name: {userInfo.username}</Text>
        <Text style={styles.infoText}>Email: {userInfo.email}</Text>
        <Text style={styles.infoText}>Phone: </Text>
        <Text style={styles.infoText}>Filiere: </Text>
      </View>
      <View style={styles.section3}>
        <TouchableOpacity style={styles.editButton} onPress={() => handleEditProfile()}>
          <Text style={[styles.editButtonText]}>Edit Profile</Text>
        </TouchableOpacity>
        <Image style={styles.logoImage} source={require('../assets/images/EduShare.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccdbdc',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  section1: {
    position: 'absolute',
    width: 393,
    height: 250,
    left: '50%',
    marginLeft: -196.5,
    top: 0,
    backgroundColor: '#5b83c4',
    borderRadius: 0,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  usernameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section2: {
    marginBottom: 20,
    width: '80%',
    height: 300,
    backgroundColor: '#f9f9f9',
    justifyContent: 'space-evenly',
    borderRadius: 25,
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  section3: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 100,
  },
  editButton: {
    marginTop: 10,
    marginBottom: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#1c2c74',
    borderRadius: 5,
  },
  editButtonText: {
    color: '#f9f9f9',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginText: {
    fontSize: 14,
    color: 'gray',
  },
  loginLink: {
    fontSize: 14,
    color: '#5981C6',
    fontWeight: 'bold',
  },
});

export default Profile;
