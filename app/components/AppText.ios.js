import React from "react";
import { StyleSheet, Text } from "react-native";

import texts from "../config/texts";

function AppText({ children, style = texts.body }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    ...texts.body,
    fontFamily: "Verdana",
  },
});

export default AppText;
