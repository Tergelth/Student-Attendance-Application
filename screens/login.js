import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MyRadioButton from "../components/MyRadioButton";
import { useNavigation } from "@react-navigation/native";
import { initializeDatabase, checkUser, saveUser } from "../utils/db";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    try {
      initializeDatabase();
      console.log("Database initialized successfully.");
      saveUser("Sofia", 1234);
    } catch (error) {
      console.error("Error initializing database:", error);
    }
  }, []);

  const loginHandler = () => {
    checkUser(name, password, (isValidUser) => {
      if (isValidUser) {
        navigation.navigate("Home");
      } else {
        Alert.alert("Нэр болон нууц үг ээ шалгана уу?");
      }
    });
  };

  return (
    <View>
      <View style={{ top: "70%" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Image source={require("../assets/img/login-logo.png")} />
        </View>
        <View style={{ top: 30, gap: 20 }}>
          <View style={css.container}>
            <MyRadioButton first="Багш" second="Оюутан" selected="option3" />
            <TextInput
              style={css.input}
              placeholder="Нэр"
              onChangeText={(text) => setName(text)}
              value={name}
            />
          </View>
          <View style={css.container}>
            <TextInput
              secureTextEntry={true}
              placeholder="Нууц үг"
              onChangeText={(text) => setPassword(text)}
              value={password}
              style={css.input}
            />
          </View>
          <View style={{ alignItems: "center", top: 20 }}>
            <TouchableOpacity style={css.button} onPress={loginHandler}>
              <Text style={css.buttonText}>НЭВТРЭХ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const css = StyleSheet.create({
  inputField: {
    borderottonColor: "gray",
    borderBottonWidth: 1,
    marginorizontal: 20,
    marginvertical: 10,
    padding: 10,
  },
  image: {
    alignContent: "Center",
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    color: "#7F2424",
    fontSize: 14,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    justifyContent: "flex-start",
  },
  input: {
    width: "90%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#E0E0E0",
  },
  button: {
    backgroundColor: "#7F2424",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
