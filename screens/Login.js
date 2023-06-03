import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Fonts";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
  if (email !== "" && password !== "") {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Login success");
        navigation.navigate("Profile"); // Navigate to the Profile page
      })
      .catch((err) => Alert.alert("Login error", err.message));
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
          placeholder="Entrer votre email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
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
});

export default Login;
