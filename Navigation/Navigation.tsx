import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import Login from "../screens/Login.js";
import Register from "../screens/Register.js";
import SlashScreen from "../screens/SlashScreen.js";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import Chat from "../screens/Chat";
// import Chatbox from "../components/Chatbox";
// import Conversation from "../components/Conversation.js";


import { RootStackParamList } from "../type";

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
      <Stack.Screen name="Chat" component={Chat} />
      {/* <Stack.Screen name="Chat">
        {({ navigation, route }) => (
          <Chatbox
            chat={route.params.chat}
            currentUser={route.params.currentUser}
            setSendMessage={route.params.setSendMessage}
            receivedMessage={route.params.receivedMessage}
          />
        )}
      </Stack.Screen> */}
      <Stack.Screen name="EditProfile" component={EditProfile} />
      {/* <Stack.Screen name="Conversation">
        {({ navigation, route }) => (
          <Conversation
            data={route.params.data}
            currentUserId={route.params.currentUserId}
          />
        )}
      </Stack.Screen> */}
    </Stack.Navigator>
  );
}
