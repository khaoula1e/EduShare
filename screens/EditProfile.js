import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const EditProfile = ({ route, navigation }) => {
  const { userId, setUpdatedUserInfo } = route.params;
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [filiere, setFiliere] = useState('');

  useEffect(() => {
    if (!userId) {
      return;
    }

    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://192.168.137.1:8080/api/auth/user/${userId}`);
        setUserInfo(response.data);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setFiliere(response.data.filiere);
        setLoading(false);
      } catch (error) {
        console.log('Error:', error);
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [userId]);

  const handleSaveProfile = async () => {
    try {
      setLoading(true);
      await axios.put(`http://192.168.137.1:8080/api/auth/user/${userId}`, {
        username: username,
        email: email,
        phone: phone,
        filiere: filiere,
      });
      setLoading(false);
      setUpdatedUserInfo({
        username: username,
        email: email,
        phone: phone,
        filiere: filiere,
      });
      console.log('Profile updated successfully!!');
      navigation.goBack();
    } catch (error) {
      console.log('Error:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
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
      <Text style={styles.title}>Edit Profile</Text>
      {/* <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      /> */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Filiere"
        value={filiere}
        onChangeText={setFiliere}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  saveButton: {
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#1c2c74',
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#f9f9f9',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default EditProfile;
