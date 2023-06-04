import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import NotificationItem from './notificationItem';

export default function Notification () {
  return (
    <View style = {styles.sectionContainer}>
    <NotificationItem/>
    <NotificationItem/>

    </View>
    
  );
}

const styles = StyleSheet.create({
    sectionContainer:{
        
        backgroundColor:'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        overflow: 'hidden',
        padding: 30,
        alignItems:'center',
  
    },
    
   
})
