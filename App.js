import {
  StyleSheet,
  Button,
  SafeAreaView,
  Alert,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color={"orange"}
        title={"Click me!"}
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />
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
