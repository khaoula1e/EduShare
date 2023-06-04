import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



export default function Experience () {
  return (
   <View style = {{alignItems:'center'}}>

    <View style = {{padding : 10, width:'80%',backgroundColor:'blue', height:150}}>
      <View style ={{flexDirection:'row', alignItems:'center', marginBottom: 10, justifyContent:'flex-start'}}>
       <Image style = {{width:50, height:50, borderRadius:50, marginRight:10}}  source={require('../assets/images/img.webp')}></Image>
       <View style = {{}}>
        <Text style = {{}}>Aya Khai</Text>
        <Text style = {{color:'#777777', fontSize:8, }}>3h</Text>
       </View>   
    </View>

    <View style = {{alignItems:'center', }}>
        <Text>Mon expérience au sein d'oracle m'a appris le suivant: </Text>
   <Image style = {{width:'80%', height:'50%', borderColor:'blue', }}  source={require('../assets/images/oracle.png')}></Image>
       
       </View>
       <View style ={{flexDirection:'row', justifyContent:'space-around', borderTopColor:'black', borderTopWidth: 1, padding:20}}>
        <View style ={{flexDirection:'row', alignItems:'center'}} >
        <AntDesign name="like2" size={24} color="black" />
        <Text style = {{marginLeft:10}}>Love</Text>
        </View>
        <View style ={{flexDirection:'row', alignItems:'center', }}>
        <FontAwesome5 name="comment" size={24} color="black" />
        <Text style = {{marginLeft:10}}>Comment</Text>
        </View>
       </View>

    </View>
   </View>
   
    
  );
}

