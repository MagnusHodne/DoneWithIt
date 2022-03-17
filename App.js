import Screen from "./app/components/Screen";
import { Text, TextInput } from "react-native";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <AppPicker icon={"apps"} placeholder={"Category"} />
      <AppTextInput icon={"email"} placeholder={"email"} />
    </Screen>
  );
}
