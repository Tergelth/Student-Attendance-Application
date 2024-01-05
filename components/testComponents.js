import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

function TestComponents(props) {
  const {
    testMark1 = 0,
    testMark2 = 0,
    testMark3 = 0,
    testMark4 = 0,
    testMark5 = 0,
    totalMarks,
  } = props;

  const marks = testMark1 + testMark2 + testMark3 + testMark4 + testMark5;
  const percentage = ((marks / totalMarks) * 100).toFixed(1);
  const remainingMarks = totalMarks - marks;

  

  return (
    <View style={css.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "column", gap: 8, width: "80%" }}>
          <Text style={css.event}>{props.event}</Text>
          <Text style={css.author}>{props.date}</Text>
          <Text style={css.author}>{props.content}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={css.author}>ОНОО</Text>
          <Text style={css.attend}>{percentage}</Text>
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
            <DataTable.Cell style={{ flex: -1 }}>
              {props.testMark1}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>2-р дасгал</DataTable.Cell>
            <DataTable.Cell>3</DataTable.Cell>
            <DataTable.Cell style={{ flex: -1 }}>
              {props.testMark2}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>3-р дасгал</DataTable.Cell>
            <DataTable.Cell>3</DataTable.Cell>
            <DataTable.Cell style={{ flex: -1 }}>
              {props.testMark3}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>4-р дасгал</DataTable.Cell>
            <DataTable.Cell>3</DataTable.Cell>
            <DataTable.Cell style={{ flex: -1 }}>
              {props.testMark4}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>5-р дасгал</DataTable.Cell>
            <DataTable.Cell>3</DataTable.Cell>
            <DataTable.Cell style={{ flex: -1 }}>
              {props.testMark5}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell></DataTable.Cell>
            <DataTable.Cell>{totalMarks}</DataTable.Cell>
            <DataTable.Cell style={{ flex: -1 }}>{marks}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <View
          style={{ height: 1, width: "100%", backgroundColor: "#303030" }}
        />
        <View style={{ flexDirection: "row", top: 5, position: "relative" }}>
          <View style={{ gap: 5 }}>
            <Text style={css.mark}>Дүн: {percentage}</Text>
            {/* <Text>Ангийн дундаж: {classMean}</Text> */}
            <View style={css.progressBar}>
              <View style={[css.progressEmpty, { width: `${percentage}%` }]} />
              <View
                style={[
                  css.progressFill,
                  { width: `${(remainingMarks / totalMarks) * 100}%` },
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default TestComponents;

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
