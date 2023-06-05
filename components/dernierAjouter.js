import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import DernierAjouterItem from './dernierAjouterItem';


export default function DernierAjouter() {
      const navigation = useNavigation();

  return (
    <View >
          <Text style = {{color:'#759BB0', fontSize: 20,}} >dernier ajouté</Text>
      <DernierAjouterItem title="CONTENEURISATION DES APPLICATIONS" time="12:00 PM" desc="Introduction aux Conteneurs" type="Course" />
      <DernierAjouterItem title="CONTENEURISATION DES APPLICATIONS" time="12:00 PM" desc="Introduction aux Conteneurs" type="Tp" />
      <DernierAjouterItem title="CONTENEURISATION DES APPLICATIONS" time="12:00 PM" desc="Introduction aux Conteneurs" type="Course" />
      

          

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
