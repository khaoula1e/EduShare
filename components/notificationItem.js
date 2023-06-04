import React,  { useEffect } from 'react'
import {  Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function NotificationItem() {

  
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, backgroundColor: '#D6E7F7', borderRadius: 10, width: '100%', shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 4, marginBottom:20 }}>
    <View style={{ backgroundColor: '#EAEAFF', padding: 15, borderRadius: 10 }}>
      <MaterialCommunityIcons name="message-bulleted" size={24} color="#3D5CFF" />
    </View>
    <View style={{ marginLeft: 20 }}>
      <Text style={{ fontWeight: '900', flexDirection: 'column', flexWrap: 'wrap', paddingBottom: 20 }}>Rapport sur les attaques FileUploadDevoir</Text>
      <View style={{ flexDirection: 'row' }}>
        <AntDesign name="clockcircle" size={10} color="#121558" />
        <Text style={{ color: '#121558', fontSize: 10 }}> mercredi 19 avril 2023</Text>
      </View>
    </View>
  </View>
    
  );
}
