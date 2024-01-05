import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function ProgressComponents(props) {
  return (
    <View style={css.container}>
      <View style={{ flexDirection: "row",justifyContent:'space-between' }}>
        <View style={{ flexDirection: "column", gap: 8 }}>
          <Text style={css.week}>{props.week} - р долоо хоног</Text>
          <Text style={css.author}>Нэр: {props.content}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
        </View>
      </View>
      <View style={{ height: 1, width: "100%", backgroundColor: "#303030"}} />
      <View style={{ flexDirection: "row", top: 5 , justifyContent:'space-between'}}>
        <View style={{ gap: 5 }}>
          <Text style={css.author}>Лабораторийн Ажил</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#303030",
              borderRadius: 10,
              gap: 10,
              width: "180%",
              margin: 2
            }}
          >
            <View style={{left: 3,margin: 14}}>
              <Image source={require("../assets/img/icon_article.png")} />
            </View>
            <View
              style={{ height: "100", width: 1, backgroundColor: "#303030" }}
            />
            <View style={{ flexDirection: "column", padding: 8 }}>
              <Text>Lab.pdf</Text>
              <Text style={css.author}>PDF</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={css.author}>ОНОО</Text>
          <Text style={css.attend}>{props.point}</Text>
        </View>
      </View>
    </View>
  );
}
export default ProgressComponents;


const css = StyleSheet.create({
  container: {
    gap: 7,
    flexDirection: "column",
    marginBottom: 5,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    backgroundColor: "#fff",
  },

  week: {
    color: "#303030",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontFamily: "Roboto",
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "500",
    lineHeight: 20,
    textTransform: "uppercase",
  },
  author: {
    color: "#303030",
    fontFamily: "Roboto",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: undefined,
    textAlign: "auto",
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
