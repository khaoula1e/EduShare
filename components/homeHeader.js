import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeHeader({ toggleSidebar }) {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar}>
          <Ionicons name="menu-outline" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.name}>
          <Text style={styles.namel1}>
            Hola, Khaoula!
          </Text>
          <Text style={styles.namel2}>
            Que veux-tu apprendre aujourd'hui
          </Text>
        </View>
        <Ionicons name="notifications-circle" size={30} color="#A5A6F6" onPress={() => navigation.navigate('Notifications')} />
        <TouchableOpacity onPress={() => navigation.navigate('Experience')}>
          <Image style={styles.profil} source={require('../assets/images/img.webp')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  name: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
  },
  namel1: {
    paddingLeft: 20,
    width: 154,
    height: 'auto',
    fontSize: 26,
    letterSpacing: 0.1,
    width: 244,
    fontWeight: 400,
    color: 'rgba(112, 116, 126, 1)',
  },
  namel2: {
    width: 244,
    height: 'auto',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.1,
    width: 244,
    fontWeight: 400,
    color: 'rgba(112, 116, 126, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  profil: {
    width: 41,
    height: 40,
    borderRadius: 4,
    marginLeft: 20,
  },
});
