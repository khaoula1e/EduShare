import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Experience ({ img }) {
  return (
    <View style={{ alignItems: 'center', marginBottom: 20, borderRadius: 30 }}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 12,
          width: 350,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            justifyContent: 'flex-start',
            padding: 10,
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 50, marginRight: 20 }}
            source={require('../assets/images/img.webp')}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: '900' }}>Aya Khai</Text>
            <Text style={{ color: '#777777', fontSize: 10 }}>3h</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <Text style={{ width: '80%' }}>
            "I chose AuraPlayer because it is the only product that could build a new mobile layer that connected to my Patient application.
            It is handy, and in a short time a new mobile application was built without the need to reprogram my whole application."
          </Text>
          <Image
            style={{ width: '100%', height: 150, margin: 20, borderRadius: 10 }}
            source={img} // Remove the require() function around img
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopColor: 'black',
            borderTopWidth: 1,
            padding: 20,
            paddingBottom: 0,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="like2" size={24} color="black" />
            <Text style={{ marginLeft: 10 }}>Love</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name="comment" size={24} color="black" />
            <Text style={{ marginLeft: 10 }}>Comment</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
