import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const EditProfile = ({ route,navigation }) => {
  const { userId } = route.params ; // Default to an empty object if route.params is undefined
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [filiere, setFiliere] = useState('');

  useEffect(() => {
    if (!userId) {
      return; // Abort the effect if userId is not available
    }

    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`http://192.168.137.1:8080/api/auth/user/${userId}`);
        setUserInfo(response.data);
        setFullName(response.data.fullName);
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
        username: fullName,
        email: email,
        phone: phone,
        filiere: filiere,
      });
      setLoading(false);
      // Navigate back to the profile screen or perform any other action
      console.log('Profile updated successfully!!')
      navigation.navigate("Profile", { userId });
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
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
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
        <Text style={styles.saveButtonText}>Save</Text>
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    marginTop: 10,
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
