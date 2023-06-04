import React,  { useEffect } from 'react'
import {  Text, View, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function SideBar() {


  return (
    
    <View style ={{marginTop:50}}>
         <View style ={{backgroundColor:'black', width:301, height:724, borderRadius:30, padding:20}} >
            <View style = {{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:50}}>
            <AntDesign name="leftcircleo" size={50} color="#759BB0" />
            <Text style = {{color:'#ADD3E8', fontSize:26}}>Khaoula Elfatimi</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent:'space-around' }}>
  
  <View style={{ alignItems: 'center', justifyContent:'space-around' }}>
    
    <Entypo name="home" size={35} color="#D6E7F7" />
    <View style = {{marginBottom:20}}/>
    <AntDesign name="book" size={35} color="#D6E7F7" />
    
    <View style = {{marginBottom:20}}/>
    <FontAwesome name="book" size={35} color="#D6E7F7" />
    <View style = {{marginBottom:20}}/>
    <Ionicons name="ios-chatbubble-ellipses" size={35} color="#D6E7F7" />
    <View style = {{marginBottom:20}}/>
    <Ionicons name="md-information-circle" size={35} color="#D6E7F7" />
  </View>


  <View style={{ marginLeft: 10 }}>
    <Text style={{ color: '#D6E7F7', fontSize: 35, marginBottom:20 }}>Accueil</Text>
    <Text style={{ color: '#D6E7F7', fontSize: 35,marginBottom:20 }}>Mes cours</Text>
    <Text style={{ color: '#D6E7F7', fontSize: 35,marginBottom:20 }}>Cours</Text>
    <Text style={{ color: '#D6E7F7', fontSize: 35,marginBottom:20 }}>Chat</Text>
    <Text style={{ color: '#D6E7F7', fontSize: 35, }}>Experience</Text>
  </View>
</View>
<View style ={{padding:20, margin:20}}>
    <Image style = {{width:180, height:100, }}  source={require('../assets/images/edushare.png')}></Image>
</View>
<View style ={{flexDirection:'row', alignItems:'center',marginBottom:20}}> 
<MaterialCommunityIcons name="logout-variant" size={24} color="#D6E7F7" />
<Text style = {{color:'#D6E7F7', marginLeft:20}}>Logout</Text>
</View>
<View style = {{flexDirection:'row',  justifyContent:'space-between'}}>

    <View style ={{flexDirection:'row', alignItems:'center'}}> 
<Entypo name="light-up" size={24} color="#D6E7F7" />
<Text style = {{color:'#D6E7F7' , marginLeft:20}}>Light mode</Text>
    </View>
    <Entypo name="switch" size={30} color="#D6E7F7" />

</View>

<View> 
    
</View>
        </View>
    
    </View>
       
    
    
  );
}
