import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SideBar({ navigateToScreen }) {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <View style={styles.sidebarHeader}>
          <TouchableOpacity onPress={() => navigateToScreen('Home')}>
            <AntDesign name="leftcircleo" size={50} color="#759BB0" />
          </TouchableOpacity>
          <Text style={styles.sidebarHeaderText}>Khaoula Elfatimi</Text>
        </View>

        <View style={styles.menuItemsContainer}>
          <View style={styles.menuItem}>
            <TouchableOpacity onPress={() => navigateToScreen('Home')}>
              <Entypo name="home" size={35} color="#D6E7F7" />
            </TouchableOpacity>
            <Text style={styles.menuItemText}>Accueil</Text>
          </View>

          <View style={styles.menuItem}>
            <TouchableOpacity onPress={() => navigateToScreen('AllCoursesScreen')}>
              <AntDesign name="book" size={35} color="#D6E7F7" />
            </TouchableOpacity>
            <Text style={styles.menuItemText}>Mes cours</Text>
          </View>

          <View style={styles.menuItem}>
            <TouchableOpacity onPress={() => navigateToScreen('Filieres')}>
              <FontAwesome name="book" size={35} color="#D6E7F7" />
            </TouchableOpacity>
            <Text style={styles.menuItemText}>Cours</Text>
          </View>

          <View style={styles.menuItem}>
            <TouchableOpacity onPress={() => navigateToScreen('Experience')}>
              <Ionicons name="ios-chatbubble-ellipses" size={35} color="#D6E7F7" />
            </TouchableOpacity>
            <Text style={styles.menuItemText}>Chat</Text>
          </View>

          <View style={styles.menuItem}>
            <TouchableOpacity onPress={() => navigateToScreen('Experience')}>
              <Ionicons name="md-information-circle" size={35} color="#D6E7F7" />
            </TouchableOpacity>
            <Text style={styles.menuItemText}>Experience</Text>
          </View>
        </View>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require('../assets/images/EduShare.png')}
          />
        </View>

        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={() => navigateToScreen('Experience')}>
            <MaterialCommunityIcons name="logout-variant" size={24} color="#D6E7F7" />
          </TouchableOpacity>
          <Text style={styles.logoutText}>Logout</Text>
        </View>

        <View style={styles.lightModeContainer}>
          <View style={styles.lightModeTextContainer}>
            <Entypo name="light-up" size={24} color="#D6E7F7" />
            <Text style={styles.lightModeText}>Light mode</Text>
          </View>
          <Entypo name="switch" size={30} color="#D6E7F7" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  sidebar: {
    backgroundColor: 'black',
    width: 301,
    height: 724,
    borderRadius: 30,
    padding: 20,
  },
  sidebarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  sidebarHeaderText: {
    color: '#ADD3E8',
    fontSize: 26,
  },
  menuItemsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  menuItem: {
    paddingLeft: 20,
    paddingRight:20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row'
  },
  menuItemText: {
    color: '#D6E7F7',
    fontSize: 35,
    marginBottom: 20,
    textAlign:'left'
  },
  logoContainer: {
    padding: 20,
    margin: 20,
  },
  logoImage: {
    width: 180,
    height: 100,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutText: {
    color: '#D6E7F7',
    marginLeft: 20,
  },
  lightModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lightModeTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lightModeText: {
    color: '#D6E7F7',
    marginLeft: 20,
  },
});
