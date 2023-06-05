import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



export default function DernierAjouterItem({title, time, desc, type}) {
      const navigation = useNavigation();

  return (
   
         
          <View style = {styles.dernierAjouter}>
            <View style = {{backgroundColor: '#fff', marginBottom: 10, padding : 20, width: 342, borderRadius:20 }}>
              <Text style={{ fontSize: 14 }} >{ title}</Text>
              <Text style={{ fontSize: 14, color: "#777777", fontFamily: 'AbrilFatface-Regular' }} >{time}</Text>
              <View style={{width: '95%', borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10,marginBottom:5, opacity: 0.5 }} />
              <View style = {{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style ={{fontWeight: "auto", fontSize:14, color:'#777777', flexWrap: 'wrap',fontFamily: 'AbrilFatface-Regular'}}>  {desc} </Text>
              <Text style ={{ fontSize:12, color:'#fff', backgroundColor:'#2778F0', borderRadius: 12, fontStyle: "bold", width:50,  textAlign:'center'}} onPress={() => navigation.navigate('CoursContent')}>  {type} </Text>
            </View>
            </View>

            
            
     
      

          

        </View>
    
  );
}

const styles = StyleSheet.create({
    dernierAjouter:{

        margin: 0,
        backgroundColor: "#EAF3FF",
         paddingTop: 10,
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "space-around",
         
      },
  
})
