import React from "react";
import LoginScreen from "./screens/login";
import Home from "./screens/home";
import Class1 from "./screens/class1";
import Class2 from "./screens/class2";
import Class3 from "./screens/class3";
import Class4 from "./screens/class4";
import Class5 from "./screens/class5";
import Schedule from "./screens/schedule";
import Profile from "./screens/profile";
import Progress from "./screens/progress";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Class1"
          component={Class1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Class2"
          component={Class2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Class3"
          component={Class3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Class4"
          component={Class4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Class5"
          component={Class5}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Progress"
          component={Progress}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
