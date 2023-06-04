import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HomeHeader  from '../components/homeHeader';
import HomeSearch  from '../components/homeSearch';
import HomeRevision from '../components/homeRevision';
import DernierAjouter from '../components/dernierAjouter';
import CoursComponent from '../components/coursComponent';


export default function Home () {
  
 
  return (
    <View style = {styles.container}>
       <HomeHeader/> 
       <HomeSearch/>
       <HomeRevision/>
       <DernierAjouter/>
       <View style = {{flexDirection: "row",
    alignItems: "baseline",
    justifyContent:"space-between", 
    padding:20}}>
        <Text style = {{color:'#759BB0', fontSize: 20,}} >Mes Cours</Text>
        <Text style = {{color:'#777777', fontSize: 15, }}>voir tout</Text>
      </View>
       <CoursComponent/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    padding: 20,
   
  }
})
