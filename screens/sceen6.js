import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import SceenHeader from '../components/sceenHeader';
import FilName from '../components/filName';
import Ressource from '../components/ressource';
import Progress from '../components/progress';

export default function Sceen6 () {
  return (
    <View style={styles.container}>
       <ScrollView>
       <SceenHeader/>
       <FilName name='CONTENEURISATION DES APPLICATIONS'/>
       <Progress/>
       
       <Ressource/>
 </ScrollView>
       
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(233,242,255,1)',
        paddingTop: 60,
  }
})
