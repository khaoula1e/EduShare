import { View, Text, StyleSheet ,ScrollView} from 'react-native'
import React from 'react'
import SceenHeader from '../components/sceenHeader';
import FilName from '../components/filName';
import Filiere from '../components/filiere';


export default function Sceen1 () {
  return (
    <View style={styles.container}>
      <ScrollView>
       <SceenHeader/>
       <FilName/>
       <Filiere/>
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
