import React, { useState } from "react";
import { View } from "react-native";
import Custom from "./Custom.tsx";

const App = () => {
  // state variables for setting text in the custom components
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [petsName, setPetsName] = useState("");
  const [petsBirth, setPetsBirth] = useState("");
  const [breed, setBreed] = useState("");
  const [toy, setToy] = useState("");
  // state variable for confirming password
  const [confirmPassword, setConfirmPassword] = useState("");

  // function to check the password (does it match the previous entry?)
  const checkPassword = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }
  }


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
        secureTextEntry={true} // hides characters as they are typed
      />
      // re-enter password and check if it matches
      <Custom 
        label="confirm password"
        placeholder="re-enter password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        onEndEditing={checkPassword} /> 
      <Custom
        label="pet's name"
        placeholder="enter your pet's name"
        value={petsName}
        onChangeText={setPetsName}
      />
      <Custom
        label="pet's date of birth"
        placeholder="enter pet's date of birth"
        value={petsBirth}
        onChangeText={setPetsBirth}
      />
      <Custom
        label="breed"
        placeholder="enter your pet's breed"
        value={breed}
        onChangeText={setBreed}
      />
      <Custom
        label="favorite toy"
        placeholder="enter your pet's favorite toy"
        value={toy}
        onChangeText={setToy}
      />
    </View>
  );
};

export default App;
