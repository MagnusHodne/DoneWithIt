import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        placeholder={"Email"}
        icon={"email"}
        keyboardType={"email-address"}
        onChangeText={(text) => setUsername(text)}
        textContentType={"emailAddress"} /*Allows autofill on iOS*/
      />
      <AppTextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        icon={"lock"}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        textContentType={"password"}
      />
      <AppButton
        title={"Login"}
        onPress={() => console.log(username, password)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
