import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
// import { createAppContainer } from 'react-navigation';

import * as React from "react";
import Colors from "../constants/Colors";
import Login from "../screens/Login.js";
import Register from "../screens/Register.js";
import SlashScreen from "../screens/SlashScreen.js";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import Home from "../screens/Home"; 

import { RootStackParamList } from "../type";
import Sceen4 from "../screens/sceen4";
import sceen5 from "../screens/sceen5";
import sceen7 from "../screens/sceen7";
import ExperienceScreen from "../screens/experieceScreen";
import Sceen1 from "../screens/sceen7";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Slash" component={SlashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="AllCoursesScreen" component={Sceen4}/>
      <Stack.Screen name="CoursContent" component={sceen5} />
      <Stack.Screen name="Notifications" component={sceen7} />
      <Stack.Screen name="Experience" component={ExperienceScreen}/>
      <Stack.Screen name="Filieres" component={Sceen1}/>
    </Stack.Navigator>
  );
}
