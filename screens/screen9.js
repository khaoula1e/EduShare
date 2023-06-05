import React from 'react';
import { View, Text, Image } from 'react-native';
import Experience from '../components/experience';

export default function Screen9() {
  return (
    <View>
      <Experience img={require('../assets/images/oracle.png')} />
      <Experience img={require('../assets/images/deloite.png')} />
      <Experience img={require('../assets/images/oracle.png')} />
    </View>
  );
}
