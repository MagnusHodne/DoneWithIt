import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name={"email"}
          autoCapitalize={"none"}
          autoCorrect={false}
          placeholder={"Email"}
          icon={"email"}
          keyboardType={"email-address"}
          textContentType={"emailAddress"} /*Allows autofill on iOS*/
        />

        <AppFormField
          name={"password"}
          autoCapitalize={"none"}
          autoCorrect={false}
          icon={"lock"}
          placeholder={"Password"}
          secureTextEntry
          textContentType={"password"}
        />
        <SubmitButton title={"Login"} />
      </AppForm>
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
