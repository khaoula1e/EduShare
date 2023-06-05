import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
import { SearchBar,Icon  } from 'react-native-elements';


export default function SceenHeader () {
    const navigation = useNavigation();

    const [hoveredText, setHoveredText] = useState('');

  const handleMouseEnter = (text) => {
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setHoveredText('');
  };

  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
   
    setSearchText(text);
  };

  return (
    <View style={ styles.headerContainer }>

      <View style={{ backgroundColor: '#F7D7A6' , borderRadius: 4}}>
        <AntDesign name="menu-fold" size={30} color="black" />
      </View>
      <SearchBar
        placeholder="Search..."
        placeholderTextColor="rgba( 69, 123, 157, 0.7)"
        onChangeText={handleSearch}
        value={searchText}
        
        searchIcon={
          <Icon
            name="search"
            type="font-awesome"
            color="black"
            size={18}
          />
        }
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      <Ionicons name="notifications-circle" size={30} color="#A5A6F6" onPress={() => navigation.navigate('Notifications')}/>
            <TouchableOpacity onPress={() => navigation.navigate('Experience')}>
      <Image style={styles.profil} source={require('../assets/images/img.webp')} />
    </TouchableOpacity>

      </View>
    
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#457B9D',
        color:'#000'
        ,
        opacity:0.5,
        borderRadius: 20,
        width: '100%',
        height:' 100%'
        
      },
      searchContainer:{
        padding: 0,
        backgroundColor: '#457B9D',
        color:'#000'
        ,
        opacity:0.5,
        borderRadius: 20,
        width: 200,
        height: 40,
        
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 0, 
        borderTopWidth: 0
      
      },
      input: {
        fontSize: 20,
        color:'#000'
        
      },
      headerContainer:{

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
            
        
           
      },
      profil: {
        width: 50,
        height: 50,
        borderRadius: 4,
    
    }
})
