import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
});

export default function (props) {
  const [selectedValue, setSelectedValue] = useState("option1");

  useEffect(() => {
    if (props.selected) {
      setSelectedValue(props.selected);
    }
  }, [props.selected]);

  return (
    <View style={{flexDirection: "row", gap: 8}}>
      <View style={styles.radioButton}>
        <RadioButton.Android
          value="option2"
          status={selectedValue === "option2" ? "checked" : "unchecked"}
          onPress={() => setSelectedValue("option2")}
          color="#7F2424"
        />
        <Text style={styles.radioLabel}>{props.first}</Text>
      </View>

      <View style={styles.radioButton}>
        <RadioButton.Android
          value="option3"
          status={selectedValue === "option3" ? "checked" : "unchecked"}
          onPress={() => setSelectedValue("option3")}
          color="#7F2424"
        />
        <Text style={styles.radioLabel}>{props.second}</Text>
      </View>
    </View>
  );
}
