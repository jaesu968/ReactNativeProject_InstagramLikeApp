import React, { useState } from "react";
import { View } from "react-native";
import Custom from "./Custom.tsx";

const App = () => {
  // state variables for setting text in the custom components
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [petsName, setPetsName] = useState("");
  const [text, setText] = useState("");
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#ecf0f1" }}
    >
      <Custom
        label="email:"
        placeholder="Enter email address"
        value={email}
        onChangeText={setEmail}
      />
      <Custom
        label="password"
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
      />
      <Custom
        label="pet's name"
        placeholder="enter your pet's name"
        value={petsName}
        onChangeText={setPetsName}
      />
      <Custom
        label="pet's date of birth"
        placeholder="enter pet's date of birth"
        value={text}
        onChangeText={setText}
      />
      <Custom
        label="breed"
        placeholder="enter your pet's breed"
        value={text}
        onChangeText={setText}
      />
      <Custom
        label="favorite toy"
        placeholder="enter your pet's favorite toy"
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

export default App;
