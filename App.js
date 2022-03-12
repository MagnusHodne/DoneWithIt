import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: "30%",
          alignSelf: "center",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    /*SafeAreaView does not work on android (in may 2020), so we need to check for platform to add padding instead*/
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
