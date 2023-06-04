import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function CoursContent () {
  return (
    <View style = {styles.sectionContainer}>
   
   
        
        <View style ={{flexDirection: 'row', justifyContent: 'space-evenly'}} >
            
          
            <Text style={styles.text}>Cours</Text>
            <Text style={styles.text}>TD</Text>
            <Text style={styles.text}>TP</Text>
            <Text style={styles.text}>Examen</Text>
            <Text style={styles.text}>Ressources</Text>
            
           </View>

           <View style = {{flexDirection: 'column', marginBottom:35}}>
      <View style = {{flexDirection: 'row', alignItems:'center', justifyContent:'space-evenly',  width : 400}}>
         <View style = {{flexDirection:'row',  alignItems:'center'}}>
         <Text style = {{color: '#759BB0', fontSize:16, fontWeight: 'bold'}}>Section 1 :      </Text>
          <Text style = {{ fontSize:14, fontWeight: 'bold'}} >Introduction aux Conteneurs</Text>
         </View>
         
      <AntDesign name="downcircleo" size={25} color="black" />
      {/* <AntDesign name="upcircleo" size={24} color="black" /> */}
        </View>
        <View style = {{ position: 'absolute', left: 0,  right: 0,top : '150%',borderColor:'#E3E3E3',  borderWidth: 1,  }}/>
      </View>
      <View style ={{flexDirection: 'row',paddingBottom:20, borderBottomWidth: 1,  borderBottomColor:'#E3E3E3', justifyContent:'space-evenly', width:'100%', marginBottom:20}}>
        <Text style = {{}}>1 . Introduction aux Conteneurs</Text>
        <MaterialCommunityIcons name="check-bold" size={24} color="black" />
        
        
      </View>
      <View style ={{flexDirection: 'row',paddingBottom:20, borderBottomWidth: 1,  borderBottomColor:'#E3E3E3', justifyContent:'space-evenly', width:'100%', marginBottom:20}}>
        <Text style = {{}}>1 . Introduction aux Conteneurs</Text>
        <MaterialCommunityIcons name="check-bold" size={24} color="black" />
        
        
      </View>
      <View style ={{flexDirection: 'row',paddingBottom:20, borderBottomWidth: 1,  borderBottomColor:'#E3E3E3', justifyContent:'space-evenly', width:'100%', marginBottom:20}}>
        <Text style = {{}}>1 . Introduction aux Conteneurs</Text>
        <MaterialCommunityIcons name="check-bold" size={24} color="black" />
        
        
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
