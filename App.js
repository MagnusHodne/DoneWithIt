import Screen from "./app/components/Screen";
import { Text, TextInput } from "react-native";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppTextInput placeholder={"username"} icon={"email"} />
    </Screen>
  );
}
