import { View, Text, StyleSheet, Image  } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




export default function HomeHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <View style = {styles.header}>

        
<View style={{ backgroundColor: '#F7D7A6' , borderRadius: 4}}>
<AntDesign name="menu-fold" size={30} color="black" />
</View>   
  <View style = {styles.name}>
    <Text style = {styles.namel1} >
    Hola, Khaoula!
    </Text>
    <Text style = {styles.namel2} >
      Que veux-tu apprendre aujourd'hui
    </Text>
  </View>
  <Ionicons name="notifications-circle" size={30} color="#A5A6F6" onPress={() => navigation.navigate('Notifications')}/>
    <Image style = {styles.profil}  source={require('../assets/images/img.webp')}></Image>
</View>
    </View>
  )
}

const styles = StyleSheet.create({
    header :{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    
    
      },
      name: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 40,
        
      },
      
      namel1: {
        paddingLeft: 20,
        width: 154,
        height: "auto",
        fontSize: 26,
        letterSpacing: 0.1,
        width: 244,
        fontWeight: 400,
        color: "rgba(112, 116, 126, 1)",
       
      
      },
      namel2: {
        width: 244,
        height: "auto",
        fontSize: 14,
        ligneWeight: 400,
        ligneHeight: 22,
        letterSpacing: 0.1,
        width: 244,
        fontWeight: 400,
        color: "rgba(112, 116, 126, 1)",
        textAlign: "left",
        textAlignVertical: "top",
      }
      ,
      profil: {
          width: 41,
          height: 40,
        borderRadius: 4,
         marginLeft:20
    
      },
})

