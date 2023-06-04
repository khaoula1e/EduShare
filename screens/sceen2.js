import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SceenHeader from '../components/sceenHeader';
import FilName from '../components/filName';
import Semestre from '../components/semestre';


export default function Sceen1 () {
  return (
    <View style = {styles.container}>
       <SceenHeader/>
       <FilName/>
       <Semestre/>
       
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(233,242,255,1)',
        paddingTop: 60,
  }
})
