import React,  { useEffect } from 'react'
import {  Text, View } from 'react-native';


export default function LienItem() {

  
  return (
    <View style = {{alignItems:'center'}}>
    <View style = {{backgroundColor: '#D6E7F7',opacity:0.5, padding:10, borderRadius:10, width:'80%' , alignItems:'center', justifyContent:'center', marginBottom:20}}>
        <Text style = {{ fontSize:18, paddingBottom:20, borderBottomColor:'#DBDBDB', borderBottomWidth:1, width:'80%', textAlign:'center', fontWeight:900}}>freecodecamp</Text>
        <Text style = {{textDecorationLine:'underline',color:'#59A6DD'}}>What is Docker Compose? How to Use it</Text>
    </View>
</View>
  );
}
