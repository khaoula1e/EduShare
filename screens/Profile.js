import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = ({ route, navigation }) => {
  const { userId } = route.params;
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [updatedUserInfo, setUpdatedUserInfo] = useState(null);
  const handleLogout = async () => {
  try {
    const response = await axios.post('http://192.168.137.1:8080/api/auth/signout');
    console.log(response.data.message);
    // Redirigez l'utilisateur vers la page de connexion
    navigation.navigate("Login")
  } catch (error) {
    console.log('Error:', error);
  }
};

  const handleEditProfile = () => {
    navigation.navigate('EditProfile', { userId, setUpdatedUserInfo });
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
  }, [userId, updatedUserInfo]);

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
        <Image style={styles.logoImage} source={require('../assets/images/profile.png')} />
        <Text style={styles.usernameText}>{userInfo.username}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon name="logout" size={24} color="#1c2c74" />
        </TouchableOpacity>
      </View>
      <View style={styles.section2}>
        <Text style={styles.infoText}>Full Name: {userInfo.username}</Text>
        <Text style={styles.infoText}>Email: {userInfo.email}</Text>
        <Text style={styles.infoText}>Phone: {userInfo.phone}</Text>
        <Text style={styles.infoText}>Filiere: {userInfo.filiere}</Text>
      </View>
      <View style={styles.section3}>
        <TouchableOpacity style={styles.editButton} onPress={() => handleEditProfile()}>
          <Text style={[styles.editButtonText]}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate("Chat")}>
        <Text style={[styles.editButtonText]}>Chat</Text>
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
  logoutButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 20,
  },
  section0: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
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
});

export default Profile;
