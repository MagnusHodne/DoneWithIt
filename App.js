import { Text, View, Platform } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "olive",
          fontFamily: Platform.OS === "ios" ? "Courier" : "Roboto",
          fontStyle: "italic",
          fontWeight: "300",
          fontSize: 30,
          textAlign: "center",
          textTransform: "capitalize",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        consectetur esse exercitationem facere harum magnam modi nesciunt odit
        placeat, repellat? A architecto blanditiis consequatur fugit laborum
        maiores, minus odit, provident reiciendis sed temporibus totam velit.
        Enim possimus reiciendis reprehenderit? Assumenda cum doloremque eaque
        eveniet in non optio quam quas sequi!
      </Text>
    </View>
  );
}
