import React, { useCallback, useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Footer from "../components/Footer";
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from "react-native-calendars";

const Schedule = ({ weekView }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const generateItems = (selectedDate) => {
    let generatedItems = [];

    const selectedDay = new Date(selectedDate).getDay();

    if (selectedDay === 2) {
      generatedItems = [
        {
          title: selectedDate,
          data: [
            {
              lesson: "Програм хангамжийн төслийн менежмент",
              teacher: "Д. Золжаргал",
              date: selectedDate,
              time: "10:00 AM",
              location: "ШМТДС",
              class: "914",
            },
            {
              lesson: "Програм хангамжийн төслийн менежмент",
              teacher: "Д. Золжаргал",
              date: selectedDate,
              time: "11:40 AM",
              location: "ШМТДС",
              class: "914",
            },
          ],
        },
      ];
    } else if (selectedDay === 3) {
      generatedItems = [
        {
          title: selectedDate,
          data: [
            {
              lesson: "Өргөн хүрээний системийн хөгжүүлэлт",
              teacher: "М. Идэрбаатар",
              date: selectedDate,
              time: "10:00 AM",
              location: "ШМТДС",
              class: "914",
            },
            {
              lesson: "Мобайл програмчлал",
              teacher: "Ц. Солонго",
              date: selectedDate,
              time: "04:00 PM",
              location: "ШМТДС",
              class: "913",
            },
            {
              lesson: "Мобайл програмчлал",
              teacher: "Ц. Солонго",
              date: selectedDate,
              time: "05:40 PM",
              location: "ШМТДС",
              class: "913",
            },
          ],
        },
      ];
    } else if (selectedDay === 4) {
      generatedItems = [
        {
          title: selectedDate,
          data: [
            {
              lesson: "Бакалаврын ахисан түвшний төсөл II",
              teacher: "М. Идэрбаатар",
              date: selectedDate,
              time: "09:00 AM",
              location: "ШМТДС",
              class: "905",
            },
          ],
        },
      ];
    } else if (selectedDay === 5) {
      generatedItems = [
        {
          title: selectedDate,
          data: [
            {
              lesson: "Өргөн хүрээний системийн хөгжүүлэлт",
              teacher: "М. Идэрбаатар",
              date: selectedDate,
              time: "08:20 AM",
              location: "ШМТДС",
              class: "913",
            },
            {
              lesson: "Өгөгдлийн олборлолт",
              teacher: "Т. Гантөр",
              date: selectedDate,
              time: "10:00 AM",
              location: "ШМТДС",
              class: "912",
            },
            {
              lesson: "Өгөгдлийн олборлолт",
              teacher: "Т. Гантөр",
              date: selectedDate,
              time: "11:40 AM",
              location: "ШМТДС",
              class: "912",
            },
          ],
        },
      ];
    }
    return generatedItems;
  };

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemTime}>{item.time}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
          <View style={{flexDirection: "column", width: "80%"}}>
            <Text style={styles.lesson}>{item.lesson}</Text>
            <Text style={styles.teacher}>{item.teacher}</Text>
          </View>
          <View style={{ flexDirection: 'column', textRight: 20}}>
          <View style={{ alignItems: 'center'}}>
            <Text style={styles.teacher}>{item.location}</Text>
            <Text style={styles.teacher}>{item.class}</Text>
          </View>
        </View>
        </View>
      </View>
    );
  }, []);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
  }, []);

  return (
    <CalendarProvider date={new Date()} style={{ flex: 1 }}>
      <Image
        source={require("../assets/img/school-back2.png")}
        style={{ width: "100%" }}
      />
      {weekView ? (
        <WeekCalendar />
      ) : (
        <ExpandableCalendar
          theme={{
            dayTextColor: "#000000",
            todayTextColor: "#7F2424",
            agendaTodayColor: "#7F2424",
            selectedDayBackgroundColor: "#7F2424",
            selectedDayTextColor: "#ffffff",
            arrowColor: "#7F2424",
          }}
          onDayPress={handleDayPress}
        />
      )}
      <AgendaList
        sections={generateItems(selectedDate)}
        renderItem={renderItem}
        sectionStyle={styles.section}
      />
      <Footer />
    </CalendarProvider>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#ECECEC",
    color: "grey",
    textTransform: "capitalize",
  },

  item: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  itemTime: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#7F2424",
  },
  lesson: {
    color: "#303030",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "400",
    lineHeight: 20,
    textTransform: "uppercase",
  },
  teacher: {
    color: "#303030",
    fontFamily: "Roboto",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: undefined,
  },
});
