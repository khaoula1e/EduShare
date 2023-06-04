import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'



export default function Semestre () {
  return (
    <View style = {styles.sectionContainer}>
    
    <View style={styles.rowContainer}>
              <View style={styles.item} >
                <Text style = {{fontSize:25,fontWeight:'bold', color:'white', margin: 25}}>S1</Text>
                <Text style = {{fontSize:10, color:'white', textAlign:'center'}}>Introduction à la programmation et à l'algorithmique</Text>
                <Image style = {{width :' 90%',height: '40%', marginTop:15 }} source={require('../assets/icons/s5.jpg/')}></Image>
              </View>
              <View style={styles.item} />
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.item} />
              <View style={styles.item} />
            </View>
            <View style={[styles.rowContainer, styles.centeredItem]}>
              <View style={styles.item} />
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
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      
      },
      columnContainer: {
        flexDirection: 'column',
      },
      item: {
        width: 160,
        height: 260,
        margin: 20,
        padding: 0.5,
        backgroundColor: '#2B31BA',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      centeredItem: {
        alignSelf: 'center',
      },
   
})
