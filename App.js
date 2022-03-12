import { View } from "react-native";

export default function App() {
  return (
    //In this example, notice how the children are laid out in columns
    //This is different from flex in web, where they would be laid out in rows
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
