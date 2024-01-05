import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function HomeComponents(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={css.container}>
        <Image source={props.imagePath} />
        <View style={css.content}>
          <Text style={css.title}>{props.title}</Text>
          <Text style={css.author}>{props.author}</Text>
        </View>
        <Image style={css.image} source={props.iconPath} />
      </View>
    </TouchableOpacity>
  );
}
export default HomeComponents;

const css = StyleSheet.create({
  image: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 12,
    right: 10,
  },
  container: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    backgroundColor: "#fff",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    left: 15,
    top: 5,
  },
  title: {
    top: 10,
    width: "80%",
    color: "#303030",
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "800",
    fontStyle: "normal",
    lineHeight: 12,
  },
  author: {
    top: 50,
    fontWeight: "400",
    color: "#303030",
    fontFamily: "Roboto",
    fontSize: 11,
    fontStyle: "normal",
  },
});
