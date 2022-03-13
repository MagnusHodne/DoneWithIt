import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode={"contain"}
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  toolbar: {
    flex: 1,
    flexDirection: "row",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
    height: 50,
    width: 50,
    backgroundColor: colors.secondary,
  },
});
export default ViewImage;
