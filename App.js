import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "grey",
          shadowOffset: { width: 5, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 10 /*This is the only shadow property on Android - it is less customizable*/,
        }}
      />
    </View>
  );
}
