import React from "react";
import { StyleSheet, Text } from "react-native";

import texts from "../config/texts";

function AppText({ children, textType }) {
  const styles = StyleSheet.create({
    text: {
      fontFamily: "Verdana",
      ...(textType ? textType : texts.body),
    },
  });
  return <Text style={styles.text}>{children}</Text>;
}

export default AppText;
