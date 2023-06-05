import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function FilName({name}) {
      const navigation = useNavigation();

  return (
    <View style = {styles.test}>
       <View style = {{flexDirection:"row", alignItems:'center', padding: 30, paddingBottom:10}}>

<AntDesign name="leftcircleo" size={50} color="#759BB0" onPress={() => navigation.navigate('Home')}/>
        <Text style={{ fontSize: 30, marginLeft: 40, /*fontFamily: 'AbrilFatface'*/ }}>{name}</Text>
</View>
    </View>
    
  );
}

const styles = StyleSheet.create({
    
})
