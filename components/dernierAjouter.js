import { View, Text, StyleSheet } from 'react-native'
import React from 'react'



export default function DernierAjouter () {
  return (
    <View style ={styles.dernier}>
          <Text style = {{color:'#759BB0', fontSize: 20,}} >dernier ajouté</Text>
          <View style = {styles.dernierAjouter}>
            <View style = {{backgroundColor: '#fff', marginBottom: 10, padding : 20, width: 342, borderRadius:20 }}>
              <Text style = {{fontSize: 14}} >CONTENEURISATION DES APPLICATIONS</Text>
              <Text style = {{fontSize: 14, color: "#777777", fontFamily: 'AbrilFatface-Regular'}} >9:00am</Text>
              <View style={{width: '95%', borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 10,marginBottom:5, opacity: 0.5 }} />
              <View style = {{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style ={{fontWeight: "auto", fontSize:14, color:'#777777', flexWrap: 'wrap',fontFamily: 'AbrilFatface-Regular'}}>  Introduction aux Conteneurs </Text>
              <Text style ={{ fontSize:12, color:'#fff', backgroundColor:'#2778F0', borderRadius: 12, fontStyle: "bold"}}>  Cours </Text>
            </View>
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
