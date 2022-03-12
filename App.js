import { View } from "react-native";

export default function App() {
  return (
    //In this example, notice how the children are laid out in columns
    //This is different from flex in web, where they would be laid out in rows
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", //main axis is the horizontal axis
        justifyContent: "center", //aligns along the main axis
        alignItems: "center", //secondary axis
        flexWrap: "wrap", //notice how this changes the vertical alignment. The items are now aligned vertically within each row (and not within the screen)
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300,
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
      <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
