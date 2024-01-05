import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Progress(props) {
  return (
    <View style={css.boxContainer}>
      <View>
        <View style={{flexDirection: "row"}}>
        </View>
        <View style={{ flexDirection: "row", gap: 40, marginTop: 10 }}>
          <View style={{ alignItems: "center" }}>
            <Text style={css.text}>{props.input1}</Text>
            <View style={css.box}>
              <Text style={css.input}>{props.intake}</Text>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={css.text}>{props.input2}</Text>
            {/* <Text>ИРСЭН</Text> */}
            <View style={css.box}>
              <Text style={css.input}>{props.present}</Text>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={css.text}>{props.input3}</Text>
            {/* <Text>ИРЭЭГҮЙ</Text> */}
            <View style={css.box}>
              <Text style={css.input}>{props.absent}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  calendarContainer: {
    backgroundColor: "#fff",
  },
  calendar: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d9e1e8",
  },
  boxContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d9e1e8",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 7,
  },
  box: {
    width: 80,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#f2f3f4",
    borderWidth: 1,
    borderColor: "#d9e1e8",
    justifyContent: "center",
  },
  text: {
    textTransform: "uppercase",
  },
  input: {
    color: "#fc94af",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: undefined,
  },
});
