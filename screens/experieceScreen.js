import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import SceenHeader from '../components/sceenHeader';
import Screen9 from './screen9';
import FilName from '../components/filName';



export default function ExperienceScreen() {
  {sidebarOpen && <Sidebar navigateToScreen={navigateToScreen} />}
  return (
    <View style={styles.container}>
      <ScrollView>
       <SceenHeader toggleSidebar={toggleSidebar}/>
       <FilName name= 'Experiences'/>
      <Screen9/>
       </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(233,242,255,1)',
        paddingTop: 60,
  }
})