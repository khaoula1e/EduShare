import React,  { useEffect } from 'react'
import {  Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




export default function VideoItem() {


  return (
    
        <View style = {{flexDirection: 'row', justifyContent:'space-between', alignItems:'center', padding:20,width:'80%'}}>
    <View style = {{backgroundColor:'#6B53FF', padding :10, margin: 15, borderRadius:10}}>
    <AntDesign name="caretright" size={24} color="white" />
    </View>
    <View style = {{padding:10}}>
        <Text style = {{fontSize:16, fontWeight:900, marginBottom:5}}>Introduction</Text>
        <Text style = {{fontSize:12, color: '#878787', flexDirection:'column', flexWrap: 'wrap', width:'80%'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </View>
   </View>
    
    
    
  );
}
