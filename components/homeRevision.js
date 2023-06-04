import { StyleSheet, Text, View, ProgressViewIOS,ProgressBarAndroid  , ScrollView} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


export default function HomeRevision () {
    return (
        <View style = {styles.revision}>
        <Text style = {{color:'#759BB0', fontSize: 20,}} >Reprendre la révision</Text>
      <ScrollView horizontal >
      
        
        <View style = {styles.revisionItem}>
          <Text style = {{color:'#000', fontSize: 20,}} >Java   Development</Text>
          <View style = {styles.progress}>
        {Platform.OS === 'ios' ? (
        <ProgressViewIOS
          style={styles.progressBar}
          progressTintColor="#3D5CFF"
          trackTintColor="#fff"
        />
      ) : (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="#fff"
          progressTintColor="#3D5CFF"
          style={styles.progressBar}
        />
      )}
      <Text style = {{marginLeft : 10}}> Complété </Text>
        </View>
        <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
          <Text style = {{color:'#000', fontSize: 20, marginRight: 60}} >12/18</Text>
          <AntDesign name="play" size={24} color="#3D5CFF" />
        </View>
        </View>

        <View style = {styles.revisionItem}>
          <Text style = {{color:'#000', fontSize: 20,}} >Java   Development</Text>
          <View style = {styles.progress}>
        {Platform.OS === 'ios' ? (
        <ProgressViewIOS
          style={styles.progressBar}
          progressTintColor="#3D5CFF"
          trackTintColor="#fff"
        />
      ) : (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="#fff"
          progressTintColor="#3D5CFF"
          style={styles.progressBar}
        />
      )}
      <Text style = {{marginLeft : 10}}> Complété </Text>
        </View>
        <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
          <Text style = {{color:'#000', fontSize: 20, marginRight: 60}} >12/18</Text>
          <AntDesign name="play" size={24} color="#3D5CFF" />
        </View>
        </View>

        <View style = {styles.revisionItem}>
          <Text style = {{color:'#000', fontSize: 20,}} >Java   Development</Text>
          <View style = {styles.progress}>
        {Platform.OS === 'ios' ? (
        <ProgressViewIOS
          style={styles.progressBar}
          progressTintColor="#3D5CFF"
          trackTintColor="#fff"
        />
      ) : (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color="#fff"
          progressTintColor="#3D5CFF"
          style={styles.progressBar}
        />
      )}
      <Text style = {{marginLeft : 10}}> Complété </Text>
        </View>
        <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
          <Text style = {{color:'#000', fontSize: 20, marginRight: 60}} >12/18</Text>
          <AntDesign name="play" size={24} color="#3D5CFF" />
        </View>
        </View>

        
      
      

      
      

      </ScrollView>
      </View>
      
    );
  }



const styles = StyleSheet.create({
    progress : {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
      },
      progressBar: {
        marginTop: 20,
        width: 148,
        height: 7.2,
        borderRadius: 5,
    
      },
      progressBar2: {
        marginTop: 10,
        width: 148,
        height: 7.2,
        borderRadius: 5,
    
      },
      revisionItem: {
        justifyContent:'space-between',
        alignItems: 'center',
        padding: 20,
        width:249,
        height: 154,
        backgroundColor: "#BAD6FF",
        borderRadius: 10,
            borderWidth:1,
            borderStyle: "solid",
            borderColor: "#759BB0",
            left:0,
        marginHorizontal: 10,
      },
})    