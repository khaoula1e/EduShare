import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SceenHeader from '../components/sceenHeader';
import FilName from '../components/filName';
import Exam from '../components/exam';
import Progress from '../components/progress';
import Cours from '../components/cours'

export default function Sceen4 () {
  return (
    <View style = {styles.container}>
       <SceenHeader/>
       <FilName/>
       
       <Cours/>
       
       
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(233,242,255,1)',
        paddingTop: 60,
  }
})
