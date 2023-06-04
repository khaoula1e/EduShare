import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';



export default function Filiere () {
  return (
    <View style = {styles.sectionContainer}>
   
   
        
        <View style ={{flexDirection: 'row', justifyContent: 'space-evenly'}} >
            
          
            <Text style={styles.text}>Cours</Text>
            <Text style={styles.text}>TD</Text>
            <Text style={styles.text}>TP</Text>
            <Text style={styles.text}>Examen</Text>
            <Text style={styles.text}>Ressources</Text>
            
           </View>

        <View style = {{backgroundColor:'#F6F6F6', padding :20, flexDirection:'row', borderRadius:20,marginTop:20}}>
          <View style={{backgroundColor:'#FF922A', padding:20, borderRadius:20, marginRight:20}}>
        <SimpleLineIcons name="graduation" size={40} color="black" />

        </View>
        <View style = {{alignItems:'flex-start', justifyContent:'space-around'}}>
          <Text style = {{fontWeight:'900'}}> Exam 2018 </Text>
          <Text style = {{color: '#91919F'}}> Description: All can be perfect in math.... </Text>
          <Text style = {{color: '#91919F'}} > * By  EL HAJJAMI MOHAMED </Text>
        </View>
        </View>
        <View style = {{backgroundColor:'#F6F6F6', padding :20, flexDirection:'row', borderRadius:20,marginTop:20}}>
          <View style={{backgroundColor:'#FF922A', padding:20, borderRadius:20, marginRight:20}}>
        <SimpleLineIcons name="graduation" size={40} color="black" />

        </View>
        <View style = {{alignItems:'flex-start', justifyContent:'space-around'}}>
          <Text style = {{fontWeight:'900'}}> Exam 2018 </Text>
          <Text style = {{color: '#91919F'}}> Description: All can be perfect in math.... </Text>
          <Text style = {{color: '#91919F'}} > * By  EL HAJJAMI MOHAMED </Text>
        </View>
        </View>
        <View style = {{backgroundColor:'#F6F6F6', padding :20, flexDirection:'row', borderRadius:20,marginTop:20}}>
          <View style={{backgroundColor:'#FF922A', padding:20, borderRadius:20, marginRight:20}}>
        <SimpleLineIcons name="graduation" size={40} color="black" />

        </View>
        <View style = {{alignItems:'flex-start', justifyContent:'space-around'}}>
          <Text style = {{fontWeight:'900'}}> Exam 2018 </Text>
          <Text style = {{color: '#91919F'}}> Description: All can be perfect in math.... </Text>
          <Text style = {{color: '#91919F'}} > * By  EL HAJJAMI MOHAMED </Text>
        </View>
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
