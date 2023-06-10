import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import axios from 'axios';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [filiere, setFiliere] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://192.168.43.52:8080/api/auth/signup', {
        username: username,
        email: email,
        password: password,
        filiere: filiere,
        phone: phone
      });

      console.log('Registration successful:', response.data);
      navigation.navigate("Login");
    } catch (error) {
      console.log('Registration error:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue à EduShare!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/images/Register.png")}
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
          placeholder="Entrer votre email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Entrer votre mot de passe"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Entrer votre filière"
          autoCapitalize="none"
          value={filiere}
          onChangeText={text => setFiliere(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Entrer votre numéro de téléphone"
          autoCapitalize="none"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Avez-vous déjà un compte? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          resizeMode="contain"
          source={require("../assets/images/EduShare.png")}
        />
      </View> */}
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
    fontFamily: "InstrumentSerif-Italic",
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
  logoImage: {
    width: "100%",
    height: "100%",
  },
});

export default Register;
