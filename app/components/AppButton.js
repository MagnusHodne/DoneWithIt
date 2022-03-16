import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
function AppButton({ children, onPress, color, width }) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: color ? color : "grey",
      borderRadius: 30,
      padding: 15,
      margin: 5,
      width: width ? width : "100%",
    },
    text: {
      fontSize: 18,
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  return (
    <TouchableHighlight
      activeOpacity={0.3}
      underlayColor={color}
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  );
}

export default AppButton;
