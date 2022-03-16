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
        <AppText type={texts.h1}>Sell what you don't need</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"Login"}
          color={colors.primary}
          onPress={() => console.log("Login")}
        />
        <AppButton
          title={"Register"}
          color={colors.secondary}
          onPress={() => console.log("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
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
});
export default WelcomeScreen;
