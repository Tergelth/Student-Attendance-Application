import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function (props) {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
      style={[css.inputField, props.stylel]}
    />
  );
}

const css = StyleSheet.create({
  inputField: {
    left: 0,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 350,
    padding: 10,
  },
});
