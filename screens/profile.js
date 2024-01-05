import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MyInput from "../components/MyInput";
import Footer from "../components/Footer";
import Svg, { Path } from "react-native-svg";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MyRadioButton from "../components/MyRadioButton";

export default function Profile() {
  const navigation = useNavigation();
  const logoutHandler = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ top: 0, zIndex: -1 }}>
        <Svg
          width="400"
          height="74"
          viewBox="0 0 400 74"
          fill="none"
          style={{
            position: "absolute",
            top: 0,
            zIndex: -1,
            alignItems: "stretch",
          }}
        >
          <Path
            opacity="0.05"
            d="M375 -0.000823975V40.7342C369.221 41.7805 363.502 43.1338 357.867 44.7882H357.855C348.53 47.5409 339.42 50.9765 330.6 55.0672C262.249 86.4572 200.928 70.9432 147.016 54.9102C107.719 43.2242 72.36 31.2622 41.082 36.9872C30.972 38.9743 21.1869 42.3555 12.007 47.0342C11.75 47.1682 11.496 47.2922 11.249 47.4192C7.47998 49.3062 3.73102 51.3762 0.00100708 53.5932V-0.000823975L375 -0.000823975Z"
            fill="#7F2424"
          />
        </Svg>
        <Svg
          width="400"
          height="74"
          viewBox="0 0 400 74"
          fill="none"
          style={{
            position: "absolute",
            top: 0,
            zIndex: -1,
            alignItems: "stretch",
          }}
        >
          <Path
            opacity="0.1"
            d="M112.963 72.736C89.2222 71.0782 65.9851 65.0899 44.4 55.067C35.5788 50.9764 26.4685 47.5404 17.143 44.787H17.131C11.4965 43.1345 5.7781 41.7829 0 40.738L0 0H375V53.593C371.269 51.375 367.52 49.306 363.752 47.419C363.505 47.292 363.252 47.168 362.994 47.033C353.814 42.3551 344.029 38.9744 333.919 36.988C302.641 31.262 267.282 43.223 227.988 54.909C196.888 64.157 163.33 73.234 127.376 73.235C122.611 73.235 117.807 73.0687 112.963 72.736Z"
            fill="#7F2424"
          />
        </Svg>
      </View>
      <View style={css.container}>
        <View style={{ flexDirection: "row", margin: 4 }}>
          <Image source={require("../assets/img/profile.png")} />
          <View style={{ top: 15, left: 5 }}>
            <Text style={css.text}>Сайн байна уу?</Text>
            <Text style={css.name}>Sofia Asseggaf</Text>
          </View>
        </View>
        <ScrollView>
          <SafeAreaView>
            <Text style={{ left: 12 }}>Нэр</Text>
            <MyInput value="Sofia" style={css.input} />
            <Text style={{ left: 12 }}>Овог</Text>
            <MyInput value="Asseggaf" style={css.input} />
            <Text style={{ left: 12 }}>Регистр</Text>
            <MyInput value="IDE236513" style={css.input} />
            <Text style={{ left: 12 }}>Хүйс</Text>
            <View style={{ justifyContent: "center", margin: 8}}>
              <MyRadioButton
                first="Эрэгтэй"
                second="Эмэгтэй"
                selected="option3"
              />
            </View>
            <Text style={{ left: 12, marginTop: 5 }}>Мэйл</Text>
            <MyInput value="sofiaasseggaf@gmail.com" style={css.input} />
            <Text style={{ left: 12 }}>Утас</Text>
            <MyInput value="7569056478" style={css.input} />
          </SafeAreaView>
          <View style={{ left: 12, marginTop: 30 }}>
            <TouchableOpacity style={css.button} onPress={logoutHandler}>
              <Text style={css.buttonText}>Гарах</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Footer />
      </View>
    </View>
  );
}
const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
    left: 23,
  },
  name: {
    color: "#303030",
    fontFamily: "Roboto",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "500",
  },
  input: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#7F2424",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
