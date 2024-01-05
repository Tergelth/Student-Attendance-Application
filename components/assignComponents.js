import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

function AssignComponents(props) {
  const {
    assignMark1 = 0,
    assignMark2 = 0,
    assignMark3 = 0,
    assignMark4 = 0,
    totalMarks 
  } = props;

  const marks = assignMark1 + assignMark2 + assignMark3 + assignMark4;

  return (
    <View style={css.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "column", gap: 8, width: "80%" }}>
          <Text style={css.event}>{props.event}</Text>
          <Text style={css.author}>{props.date}</Text>
          <Text style={css.author}>{props.content}</Text>
        </View>
        <View>
          <Text style={css.author}>ОНОО</Text>
          <Text style={css.attend}>{marks}</Text>
        </View>
      </View>
      <View style={css.contain}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={{ flex: 1 }}>Утга</DataTable.Title>
            <DataTable.Title style={{ flex: 1 }}>Авах</DataTable.Title>
            <DataTable.Title style={{ flex: -1 }}>Авсан</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>1-р дасгал</DataTable.Cell>
            <DataTable.Cell>3</DataTable.Cell>
            <DataTable.Cell style={{ flex: -1 }}>{props.assignMark1}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>2-р дасгал</DataTable.Cell>
            <DataTable.Cell>3</DataTable.Cell>
            <DataTable.Cell style={{ flex: -1 }}>{props.assignMark2}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>3-р дасгал</DataTable.Cell>
            <DataTable.Cell>3</DataTable.Cell>
            <DataTable.Cell style={{ flex: -1 }}>{props.assignMark3}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>4-р дасгал</DataTable.Cell>
            <DataTable.Cell>3</DataTable.Cell>
            <DataTable.Cell style={{ flex: -1 }}>{props.assignMark4}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell>{totalMarks}</DataTable.Cell>
            <DataTable.Cell style={{ flex: -1 }}>{marks}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </View>
  );
}
export default AssignComponents;

const css = StyleSheet.create({
  container: {
    gap: 7,
    flexDirection: "column",
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    backgroundColor: "#fff",
  },

  event: {
    color: "#fc94af",
    fontFamily: "Roboto",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "500",
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
    color: "pink",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: undefined,
  },
  contain: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 10,
  },
  progressBar: {
    height: 25,
    width: 300,
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 8,
  },
  progressEmpty: {
    flex: 1,
    backgroundColor: "#fc94af",
    borderRadius: 5,
  },
  progressFill: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
  },
});
