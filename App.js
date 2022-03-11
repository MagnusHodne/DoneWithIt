import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is my new, awesome app!</Text>
      <TouchableHighlight onPress={() => console.log("The image was tapped")}>
        <Image
          blurRadius={2}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
