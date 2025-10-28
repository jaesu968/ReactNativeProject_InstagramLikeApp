import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function Custom({ label, placeholder, value, onChangeText }) {
  // will receive props from the Parent (App.js)

  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
