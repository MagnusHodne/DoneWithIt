import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import colors from "../config/colors";
function AppButton({ title, onPress, color = "primary" }) {
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
    backgroundColor: colors.primary,
    borderRadius: 30,
    padding: 15,
    margin: 5,
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
