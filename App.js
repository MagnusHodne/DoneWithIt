import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      {/*
      The parent has flex: 1, meaning it will fill the screen
      Since all the children have flex: 1, it means they will fill an equal amount
      */}
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
        }}
      />
    </View>
  );
}
