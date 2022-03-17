import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import defaultStyles from "../config/styles";

function AppButton({ title, onPress, color = defaultStyles.colors.primary }) {
  return (
    <TouchableHighlight
      activeOpacity={0.3}
      underlayColor={color}
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 30,
    padding: 15,
    width: "100%",
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default AppButton;
