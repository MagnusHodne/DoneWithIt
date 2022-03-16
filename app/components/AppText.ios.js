import React from "react";
import { StyleSheet, Text } from "react-native";

import texts from "../config/texts";

function AppText({ children, type = texts.body }) {
  return <Text style={[styles.text, { ...type }]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    ...texts.body,
    fontFamily: "Verdana",
  },
});

export default AppText;
