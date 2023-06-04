import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import axios from 'axios';
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Fonts";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const onHandleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.137.1:8080/api/auth/signin', {
        username: username,
        password: password
      });

      console.log('Login successful:', response.data);
      const userId = response.data.id; // Assuming the response contains the user ID
      navigation.navigate("Profile", { userId }); // Pass the user ID as a navigation parameter
    } catch (error) {
      console.log('Login error:', error);
      setLoginError("Login failed. Please try again."); // Set an error message to display to the user
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue à EduShare!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/images/Login.png")}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Entrer votre nom"
          autoCapitalize="none"
          autoFocus={true}
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Entrer votre mot de passe"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Vous n'avez pas de compte? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.loginLink}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../assets/images/EduShare.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200, 
    height: 100,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: Font["InstrumentSerif-Italic"],
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    height: 200,
  },
  form: {
    width: "80%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#5981C6",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    color: "gray",
  },
  loginLink: {
    fontSize: 14,
    color: "#5981C6",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default Login;
