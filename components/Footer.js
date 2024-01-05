import React, { usestate } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
  const navigation = useNavigation();
  const homeNavigator = () => {
    navigation.navigate("Home");
  };
  const scheduleNavigator = () => {
    navigation.navigate("Schedule");
  };
  const profileNavigator = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={css.container}>
      <TouchableOpacity style={css.icon} onPress={homeNavigator}>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../assets/img/icon_portfolio.png")} />
          <Text style={css.text}>Хичээл</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={css.icon} onPress={scheduleNavigator}>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../assets/img/icon_calendar.png")} />
          <Text style={css.text}>Хуваарь</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={css.icon} onPress={profileNavigator}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../assets/img/icon_profile.png")} />
        <Text style={css.text}>Профайл</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}
const css = StyleSheet.create({
  container: {
    padding: 4,
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexShrink: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(48, 48, 48, 0.10)",
  },
  text: {
    color: "#D6D1D5",
  },
  icon: {
    gap: 2,
    alignItems: "center",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
});
