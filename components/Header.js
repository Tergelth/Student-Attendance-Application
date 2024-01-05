import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Header(props) {
  return (
    <View>
        <Image
        source={require("../assets/img/school-back3.png")}
          style={{ width: "100%" }}
        />
      <View style={css.container}>
        <Text style={css.title}>{props.lesson}</Text>
        <View style={{ justifyContent: "start", top: 15, gap: 10 , ali: "center"}}>
          <View style={{ flexDirection: "row", alignItems: "stretch", gap: 8 }}>
            <Image source={props.icon1}/>
            <Text style={css.text}>{props.building}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "stretch", gap: 8 }}>
            <Image source={props.icon2} />
            <Text style={css.text}>{props.teacher}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "stretch", gap: 8 }}>
            <Image source={props.icon3} />
            <Text style={css.text}>{props.semester}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const css = StyleSheet.create({
    image: {
      width: "100%",
      position: "relative",
    },
    container: {
      top: 50,
      gap: 2,
      padding: 10,
      justifyContent: "flex-start",
      position: "absolute",
      alignItems: "flex-start",
    },
    title: {
      width: "100%",
      color: "#303030",
      fontFamily: "Roboto",
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: "700",
    },
    name: {
      color: "#303030",
      fontFamily: "Roboto",
      fontSize: 12,
      fontWeight: "600",
      textAlign: "right",
    },
    text: {
      top: 5,
      color: "#303030",
      fontFamily: "Roboto",
      fontSize: 13,
      fontWeight: "600",
    },
});