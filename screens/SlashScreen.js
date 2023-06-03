import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Fonts";

const { height } = Dimensions.get("window");

const SlashScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Apprenez à tout moment</Text>
        <Image
          style={{
            height: height / 2.5,
          }}
          resizeMode="contain"
          source={require("../assets/images/home.png")}
        />
        <Text style={styles.phrase}>
          Mettez vos supports pédagogiques à la disposition de tout le monde à l’aide d’EduShare
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: FontSize.xxLarge,
    color: "#5981C6",
    fontFamily: Font["InstrumentSerif-Italic"],
    textAlign: "center",
  },
  phrase: {
    color: "#9FA3A9",
    textAlign: "center",
    marginBottom: Spacing * 3,
  },
  buttonsContainer: {
    paddingHorizontal: Spacing * 2,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  loginButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "48%",
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
  },
  loginButtonText: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    fontSize: FontSize.large,
    textAlign: "center",
  },
  registerButton: {
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "48%",
    borderRadius: Spacing,
    borderWidth: 1,
    borderColor: Colors.text,
  },
  registerButtonText: {
    fontFamily: "Roboto",
    color: Colors.text,
    fontSize: FontSize.large,
    textAlign: "center",
  },
});

export default SlashScreen;
