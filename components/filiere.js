import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'



export default function Filiere () {
  return (
    <View style = {styles.sectionContainer}>
    <View style = {styles.filiere}>
      <Image style = {styles.fil} source={require('../assets/icons/aseds.png')}></Image>
      <Text style={{flexDirection: 'column', flexWrap: 'wrap',textAlign:'center', color: 'white', marginRight:10, width: '80%', fontSize:18}}>ingénieur Développement des Services Numériques</Text>
    </View>
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
    fil: {
        width: 70,
        height: 70,
        borderRadius: 4,
      
      }
        ,
        filiere: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent:'space-between',
          backgroundColor: '#17375E',
          height: 101,
          width:'95%',
          borderRadius: 30,
          padding: 10,
          paddingRight: 20,
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 10,
        },
   
})
