import { View, Text, StyleSheet, Image  } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';




export default function HomeSearch  () {
  return (
   
    <View style = {styles.search}>
        <View style = {styles.searchInput}>
          <EvilIcons name="search" size={24} color="black" />
          <Text style = {styles.searchText} >Search</Text>


        </View>
        <View style={{ backgroundColor: 'rgba(214, 231, 247, 0.25)' , borderRadius: 4,}}>
        <Ionicons name="options-sharp" size={30} color="#7097AB" /> 
        </View>
        
        </View>

  )
}

const styles = StyleSheet.create({
   search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  }

  ,
  searchInput: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    width: 276,
    height: 40,
    borderRadius: 10,
    borderWidth:1,
    borderStyle: "solid",
    borderColor: "#759BB0",
    left:0,
    right:"auto",
    top:0,
    bottom:"auto",
    transform: [
      {translateX: 0},
      {translateY: 0},
      {rotate: "0deg"},
    ],
    
   flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowColor: "rgba(251, 252, 252,1)",
  shadowOpacity: 0.5,
  shadowRadius: 10,
  shadowOffset: {
    width: 15,
    height: 40,
    fontWeight: 400,
    fontSize: 14,
    color: "rgba(154, 159, 179, 1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: 0.1
  },
  searchText: {
    width: 200,
    height: 16,
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.1,
    
    color: "rgba(112, 116, 126, 1)",
  },
      
})

