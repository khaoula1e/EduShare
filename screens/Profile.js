import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Section 1: Profile Picture, Name, and Filiere */}
      <View style={styles.section}>
        <Image
          source={require('../assets/images/EduShare.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.filiere}>Computer Science</Text>
      </View>

      {/* Section 2: Username, Email, Phone, and Filiere */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>johndoe</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.icon}>✉️</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>johndoe@example.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.icon}>📞</Text>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>123-456-7890</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.icon}>📚</Text>
          <Text style={styles.label}>Filiere:</Text>
          <Text style={styles.value}>Computer Science</Text>
        </View>
      </View>

      {/* Section 3: Logo */}
      <View style={styles.section}>
        <Image
          source={require('../assets/images/EduShare.png')}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  filiere: {
    fontSize: 18,
    color: '#888',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    fontSize: 16,
  },
  logo: {
    width: 200,
    height: 80,
  },
});

export default Profile;