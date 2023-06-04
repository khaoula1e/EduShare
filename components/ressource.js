import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import VideoItem from './videoItem';
import LienItem from './lienItem';



export default function Ressource () {
  return (
    <View style = {styles.sectionContainer}>
   
   
        
        <View style ={{flexDirection: 'row', justifyContent: 'space-evenly'}} >
            
          
            <Text style={styles.text}>Cours</Text>
            <Text style={styles.text}>TD</Text>
            <Text style={styles.text}>TP</Text>
            <Text style={styles.text}>Examen</Text>
            <Text style={styles.text}>Ressources</Text>
            
           </View>
<View >
       <Text style = {{fontSize:25, color:'#4F6580',marginLeft:30}}>Videos</Text>
      <VideoItem/>
      
        <Text style = {{fontSize:25, color:'#4F6580', marginLeft:30}}>Lien utiles</Text>
        <LienItem/>
        
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
    text: {
        color:'#9A9A9A',
        borderRadius:20,
        padding:5, 
        paddingLeft:15,
        paddingRight:15,
        margin:5, 
        textDecorationLine: 'underline',
    },
    
})
