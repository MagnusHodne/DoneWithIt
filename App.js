import { Text, View, Platform } from "react-native";
import AppText from "./app/components/text/AppText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, odit.
      </AppText>
    </View>
  );
}
