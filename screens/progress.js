import react from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import Footer from "../components/Footer";


export default function Progress() {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <View>
          <Image
            source={require("../assets/img/school-back.png")}
            style={{ width: "100%" }}
          />
        </View>
        <View style={css.container}>
          <Text style={css.title}>Бакалаврын ахисан түвшний төсөл II</Text>
          <View style={{ justifyItem: "center", gap: 10, top: 30 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image source={require("../assets/img/building1.png")} />
              <Text style={css.text}>ШМТДС, 913</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 2, margin: 10 }}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={{ flex: 2 }}>Утга</DataTable.Title>
            <DataTable.Title>Оноо</DataTable.Title>
            <DataTable.Title>Цуглуулсан</DataTable.Title>
          </DataTable.Header>
          <ScrollView>
            <DataTable.Row>
              <DataTable.Cell style={{ flex: 2 }}>Ирц</DataTable.Cell>
              <DataTable.Cell>8</DataTable.Cell>
              <DataTable.Cell>4</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell style={{ flex: 2 }}>
                Лабораторийн ажил
              </DataTable.Cell>
              <DataTable.Cell>25</DataTable.Cell>
              <DataTable.Cell>15</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell style={{ flex: 2 }}>Бие даалт</DataTable.Cell>
              <DataTable.Cell>30</DataTable.Cell>
              <DataTable.Cell>15</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell style={{ flex: 2 }}>Сорил</DataTable.Cell>
              <DataTable.Cell>15</DataTable.Cell>
              <DataTable.Cell>8</DataTable.Cell>
            </DataTable.Row>
          </ScrollView>
        </DataTable>
      </View>
      <View style={{ bottom: 0 }}>
        <Footer />
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
    top: 10,
    gap: 2,
    padding: 10,
    justifyContent: "flex-start",
    position: "absolute",
  },

  title: {
    width: "100%",
    color: "#303030",
    fontFamily: "Roboto",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
  },
  name: {
    color: "#303030",
    fontFamily: "Roboto",
    fontSize: 18,
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
  author: {
    top: 50,
    fontWeight: "400",
    color: "#303030",
    fontFamily: "Roboto",
    fontSize: 11,
    fontStyle: "normal",
  },
});
