import React from "react";
import { View, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import Progress from "./progress";

export default function CalendarItems({
  thursdays,
  wednesdays,
  tuesdays,
  fridays
}) {
  const startDate = new Date("2023-09-01");
  const currentDate = new Date();

  const generateMarkedDays = (weekday) => {
    const markedDays = {};

    const currentDateIterator = new Date(startDate);
    while (currentDateIterator <= currentDate) {
      if (currentDateIterator.getDay() === weekday) {
        const dateString = currentDateIterator.toISOString().split("T")[0];
        markedDays[dateString] = { selected: true, selectedColor: "pink" };
      }
      currentDateIterator.setDate(currentDateIterator.getDate() + 1);
    }

    return markedDays;
  };

  const markedThursdays = thursdays ? generateMarkedDays(4) : {};
  const markedWednesdays = wednesdays ? generateMarkedDays(3) : {};
  const markedTuesdays = tuesdays ? generateMarkedDays(2) : {};
  const markedFridays = fridays ? generateMarkedDays(5) : {};

  const markedWeekdays = {
    ...markedThursdays,
    ...markedWednesdays,
    ...markedTuesdays,
    ...markedFridays,
  };

  return (
    <View style={{ gap: 5 }}>
      <Progress
        input1="оролт"
        input2="ирсэн"
        input3="ирээгүй"
        intake="15"
        present="8"
        absent="2"
      />
      <View style={css.calendarContainer}>
        <Calendar
          style={css.calendar}
          theme={{
            selectedDayTextColor: "#ffffff",
            selectedDayBackgroundColor: "pink",
            todayTextColor: "pink",
            textDisabledColor: "#d9e1e8",
            arrowColor: "pink",
          }}
          markedDates={markedWeekdays}
        />
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  calendarContainer: {
    backgroundColor: "#f0f0f0",
  },
  calendar: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d9e1e8",
  },
  boxContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#d9e1e8",
    backgroundColor: "#fafafa",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 7,
  },
  box: {
    width: 80,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#f2f3f4",
    borderWidth: 1,
    borderColor: "#d9e1e8",
    justifyContent: "center",
  },
  input: {
    color: "#fc94af",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: undefined,
  },
});
