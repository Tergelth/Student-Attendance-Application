import React, { useState } from "react";
import { View, Text, StyleSheet, Drawable } from "react-native";
import { DataTable } from "react-native-paper";

function MarkComponents(props) {
  const {
    generalAttendance = 0,
    generalAssignment = 0,
    generalLab = 0,
    generalTest = 0,
    generalFinal = 0,
    generalAttendanceMark = 0,
    generalLabMark = 0,
    generalAssignmentMark = 0,
    generalTestMark = 0,
    generalFinalMark = 0,
    totalMarks,
  } = props;
  const marks =
    generalAttendanceMark +
    generalLabMark +
    generalAssignmentMark +
    generalTestMark +
    generalFinalMark;

  const percentageAttendance = (generalAttendanceMark / totalMarks) * 100;
  const percentageLab = (generalLabMark / totalMarks) * 100;
  const percentageAssignment = (generalAssignmentMark / totalMarks) * 100;
  const percentageTest = (generalTestMark / totalMarks) * 100;
  const percentageFinal = (generalFinalMark / totalMarks) * 100;
  const totalPercentage =
    percentageAttendance +
    percentageLab +
    percentageAssignment +
    percentageTest +
    percentageFinal;
  const calculatePercentage = (value) => (value / totalMarks) * 100;

  return (
    <View style={css.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column", gap: 8 }}>
          <Text style={css.event}>{props.event}</Text>
          <Text style={css.author}>{props.content}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            left: 180,
          }}
        >
          <View>
            <Text style={css.author}>{props.date}</Text>
          </View>
        </View>
      </View>
      <View style={{ top: 5 }}>
        <View style={{ gap: 5 }}>
          <View style={css.contain}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{ flex: 1 }}>Утга</DataTable.Title>
                <DataTable.Title style={{ flex: 1 }}>Авах</DataTable.Title>
                <DataTable.Title style={{ flex: -1 }}>Авсан</DataTable.Title>
              </DataTable.Header>
              <DataTable.Row>
                <DataTable.Cell>Ирц</DataTable.Cell>
                <DataTable.Cell>{generalAttendance}</DataTable.Cell>
                <DataTable.Cell style={{ flex: -1 }}>
                  {generalAttendanceMark}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Лабораторийн ажил</DataTable.Cell>
                <DataTable.Cell>{generalLab}</DataTable.Cell>
                <DataTable.Cell style={{ flex: -1 }}>
                  {generalLabMark}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Бие Даалт</DataTable.Cell>
                <DataTable.Cell>{generalAssignment}</DataTable.Cell>
                <DataTable.Cell style={{ flex: -1 }}>
                  {generalAssignmentMark}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Сорил</DataTable.Cell>
                <DataTable.Cell>{generalTest}</DataTable.Cell>
                <DataTable.Cell style={{ flex: -1 }}>
                  {generalTestMark}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell>Эцсийн шалгалт</DataTable.Cell>
                <DataTable.Cell>{generalFinal}</DataTable.Cell>
                <DataTable.Cell style={{ flex: -1 }}>
                  {generalFinalMark}
                </DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell></DataTable.Cell>
                <DataTable.Cell>{totalMarks}</DataTable.Cell>
                <DataTable.Cell style={{ flex: -1 }}>{marks}</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </View>
        </View>
      </View>
    </View>
  );
}
export default MarkComponents;

const css = StyleSheet.create({
  container: {
    gap: 7,
    flexDirection: "column",
    margin: 5,
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
    color: "#DF5532",
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
    padding: 8,
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
  attend: {
    color: "#fc94af",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: undefined,
  },
  containerCircular: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circularProgressContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  progressContent: {
    alignItems: "center",
  },
  circularProgressContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  progressContent: {
    alignItems: "center",
  },
  attend: {
    color: "#fc94af",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: undefined,
    marginTop: 8,
  },
});
