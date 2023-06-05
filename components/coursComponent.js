import { View, Text, StyleSheet, Image, ProgressViewIOS,ProgressBarAndroid  } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



export default function CoursComponent() {
  const navigation = useNavigation();
  return (

    <View style = {{alignItems:'center',justifyContent:'space-between', marginBottom:50}}>
    
      <View style = {{flexDirection:'row', alignItems:'center', justifyContent:'space-between',width:'90%', shadowColor: 'black', shadowOpacity: 0.3, borderRadius: 20, backgroundColor: 'white',shadowRadius: 5,elevation: 5, paddingRight:40}}>
      <View style = {{backgroundColor: "#FF4848", alignItems:'center', padding :20, borderTopLeftRadius:20, borderBottomLeftRadius:20}}>
            <Image style={{width:85, height: 85 }} source={require('../assets/docker1.png')}/>
      </View>
      <View style= {{ padding:20,}}>
      <Text style = {{color:'#4E84C1', fontSize: 15, fontWeight:900, letterSpacing:0.1, flexDirection: 'column', flexWrap: 'wrap',textAlign:'center' , marginBottom :20}} onPress={() => navigation.navigate('CoursContent')}> CONTENEURISATION  DES APPLICATIONS</Text>
      <View style = {{ alignItems:'center',}}>
            <Text style = {{fontSize: 10, color: "#4E84C1", fontFamily: 'AbrilFatface'}} >60% Completed</Text>
            {Platform.OS === 'ios' ? (
      <ProgressViewIOS
        style={styles.progressBar2}
        progressTintColor="#3D5CFF"
        trackTintColor="#000"
      />
    ) : (
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        color="#4E84C1"
        progress={0.6}
        progressTintColor="#3D5CFF"
        style={styles.progressBar2}
      />
    )}
          </View>
      </View>
      
      </View>
    </View>





   
  );
}

const styles = StyleSheet.create({
  
  
  mesCourdHeader:{
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent:"space-between", 
    padding:20
  },
  progressBar2: {
    width: "90%"
}

  
  }
)
