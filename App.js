import React,  { useEffect } from 'react'
import {  Text, View } from 'react-native';
import Home from './screens/home'
import Sceen1 from './screens/sceen1';
import Sceen2 from './screens/sceen2';
import Sceen3 from './screens/sceen3';
import Sceen4 from './screens/sceen4';
import Sceen5 from './screens/sceen5';
import Sceen6 from './screens/sceen6';
import Sceen7 from './screens/sceen7';
import Screen8 from './screens/screen8';
import { loadFonts } from './expo-font';

export default function App() {

  //  useEffect(() => {
  //   loadFonts();
  // }, []);

  return (
    <View>
      <Screen8/>
    </View>
    
  );
}
