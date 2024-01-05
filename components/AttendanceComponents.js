import React from "react";
import { View, Text, StyleSheet } from "react-native";

function AttendanceComponents(props) {
  return (
    <View style={css.container}>
      <View style={{ flexDirection: "column", gap: 8 }}>
        <Text style={css.week}>{props.week} - р долоо хоног</Text>
        <Text style={css.author}>Нэр: {props.content}</Text>
      </View>
      <View style={css.piece}>
        <View>
          <Text style={css.author}>ЛЕКЦ</Text>
          <Text style={css.attend}>{props.lec}</Text>
        </View>
        <View>
          <Text style={css.author}>ЛАБ</Text>
          <Text style={css.attend}>{props.lab}</Text>
        </View>
      </View>
    </View>
  );
}
export default AttendanceComponents;

const css = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    backgroundColor: "#fff",
    justifyContent:'space-between',
    },
  piece: {
    flexDirection: "row",
    gap: 15,
  },
  week: {
    color: "#303030",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "400",
    lineHeight: 20,
    textTransform: 'uppercase',

  },
  author: {
    color: "#303030",
    fontFamily: "Roboto",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: undefined,
  },
  attend: {
    color: "#fc94af",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: undefined,
  },
});
