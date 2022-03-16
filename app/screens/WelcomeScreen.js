import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import texts from "../config/texts";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppText textType={texts.h1}>Sell what you don't need</AppText>
      </View>
      <AppButton color={colors.primary} onPress={() => console.log("Login")}>
        Login
      </AppButton>
      <AppButton
        color={colors.secondary}
        onPress={() => console.log("Register")}
      >
        Register
      </AppButton>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    alignSelf: "center",
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default WelcomeScreen;
