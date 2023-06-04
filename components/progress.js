import React,  { useEffect } from 'react'
import {  Text, View, ProgressBarAndroid , StyleSheet} from 'react-native';


export default function Progress() {
        const progress = 0.6
  return (
    <View style ={{flexDirection:'row', alignItems:'baseline',justifyContent:'space-evenly',padding:20, paddingTop:-1}}>
      <Text style ={{fontSize:20, fontWeight:'900',}}>12/18</Text>
        
       
      {Platform.OS === 'ios' ? (
        <ProgressViewIOS
          style={styles.progressBar}
          progressTintColor="#3D5CFF"
          trackTintColor="#fff"
          progress={progress}
        />
      ) : (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="#3D5CFF"
          style={styles.progressBar}
          progress={progress}
        />
      )}

      <Text style = {{marginLeft : 10}}> Complété </Text>
        
      </View>
    
  );
}

const styles = StyleSheet.create({
    progressBar: {
        width: 150,
        height: 8,
        borderRadius: 20,
    
      },
})