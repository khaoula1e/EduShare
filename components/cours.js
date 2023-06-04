import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import CoursComponent from './coursComponent';



export default function Cours () {
  return (
    <View style = {styles.sectionContainer}>
    <CoursComponent/>
    <CoursComponent/>
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
