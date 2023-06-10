import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../components/homeHeader';
import HomeSearch from '../components/homeSearch';
import HomeRevision from '../components/homeRevision';
import DernierAjouter from '../components/dernierAjouter';
import CoursComponent from '../components/coursComponent';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const navigation = useNavigation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navigateToScreen = (screenName) => {
    setSidebarOpen(false);
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {sidebarOpen && <Sidebar navigateToScreen={navigateToScreen} />}
      <ScrollView>
        <View style={styles.content}>
          <HomeHeader toggleSidebar={toggleSidebar} />
          <HomeSearch />
          <HomeRevision />
          <DernierAjouter />
          <View style={styles.coursContainer}>
            <Text style={styles.coursTitle}>Mes Cours</Text>
            <Text style={styles.seeAllText} onPress={() => navigation.navigate('AllCoursesScreen')}>voir tout</Text>
          </View>
          <CoursComponent />
          <CoursComponent />
          <CoursComponent/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    padding: 20,
  },
  coursContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    padding: 20,
  },
  coursTitle: {
    color: '#759BB0',
    fontSize: 20,
  },
  seeAllText: {
    color: '#777777',
    fontSize: 15,
  },
});
