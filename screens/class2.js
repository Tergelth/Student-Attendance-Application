import react, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  PanResponder,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import AttendanceComponents from "../components/AttendanceComponents";
import ProgressComponents from "../components/progressComponent";
import Header from "../components/Header";
import AssignComponents from "../components/assignComponents";
import MarkComponents from "../components/markComponents";
import TestComponents from "../components/testComponents";
import CalendarItems from "../components/Calendar";
import Progress from "../components/progress";

const Tab = createMaterialTopTabNavigator();

const ScreenOne = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [draggedDistance, setDraggedDistance] = useState(0);
  const drawerHeight = 560;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          setDraggedDistance(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > drawerHeight / 2) {
          setDrawerVisible(false);
          setDraggedDistance(0);
        } else {
          setDraggedDistance(0);
        }
      },
    })
  ).current;

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <View>
      <View style={{ gap: 3, top: 8 }}>
        <ScrollView>
          <AttendanceComponents
            week="1"
            content="Сэдвийн хэлэлцүүлэг"
            lec="1"
            lab="1"
          />
          <AttendanceComponents
            week="2"
            content="Сэдвийн хэлэлцүүлэг"
            lec="1"
            lab="1"
          />
          <AttendanceComponents
            week="3"
            content="Сэдвийн хэлэлцүүлэг"
            lec="0"
            lab="1"
          />
          <AttendanceComponents
            week="4"
            content="Сэдвийн хэлэлцүүлэг"
            lec="1"
            lab="0"
          />
          <AttendanceComponents
            week="5"
            content="Сэдвийн хэлэлцүүлэг"
            lec="1"
            lab="1"
          />
          <AttendanceComponents
            week="6"
            content="Сэдвийн хэлэлцүүлэг"
            lec="0"
            lab="0"
          />
          <AttendanceComponents
            week="7"
            content="Сэдвийн хэлэлцүүлэг"
            lec="1"
            lab="0"
          />
          <AttendanceComponents
            week="8"
            content="Сэдвийн хэлэлцүүлэг"
            lec="1"
            lab="0"
          />
        </ScrollView>
        {drawerVisible && (
          <View style={[css.drawerContainer, { height: drawerHeight }]}>
            <View style={css.drawerHandle} {...panResponder.panHandlers}>
              <View style={css.dragHandle} />
            </View>
            <View style={css.drawerContent}>
              <CalendarItems
                tuesdays={true}
                intake="15"
                present="7"
                absent="3"
              />
            </View>
          </View>
        )}

        <View
          style={[
            css.dragHandle,
            { backgroundColor: drawerVisible ? "transparent" : "gray" },
          ]}
          {...panResponder.panHandlers}
        />

        {!drawerVisible && (
          <TouchableOpacity
            style={css.drawerButton}
            onPress={toggleDrawer}
            activeOpacity={0.8}
          >
            <Text>МЭДЭЭЛЭЛ</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const ScreenTwo = () => {
  const [isExpanded1, setIsExpanded1] = useState(true);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  const toggleExpand1 = () => {
    setIsExpanded1(!isExpanded1);
    setIsExpanded2(false);
    setIsExpanded3(false);
  };

  const toggleExpand2 = () => {
    setIsExpanded2(!isExpanded2);
    setIsExpanded1(false);
    setIsExpanded3(false);
  };
  const toggleExpand3 = () => {
    setIsExpanded3(!isExpanded3);
    setIsExpanded1(false);
    setIsExpanded2(false);
  };
  return (
    <View>
      <View style={{ gap: 3, top: 8 }}>
        <ScrollView>
          <View style={{ alignItems: "center", gap: 10 }}>
            <TouchableOpacity style={css.button} onPress={toggleExpand1}>
              <Text style={css.buttonText}>ЛАБОРАТОРИЙН АЖИЛ</Text>
            </TouchableOpacity>
            {isExpanded1 && (
              <View style={css.collapsibleContent}>
                <View style={{ marginBottom: 5 }}>
                  <Progress
                    input1="Нийт"
                    input2="авсан"
                    input3="алдсан"
                    intake="30"
                    present="18"
                    absent="4"
                  />
                </View>
                <ProgressComponents
                  week="1"
                  content="Сэдвийн хэлэлцүүлэг"
                  attend="2"
                  point="10"
                />
                <ProgressComponents
                  week="2"
                  content="Сэдвийн хэлэлцүүлэг"
                  attend="2"
                  point="8"
                />
                <ProgressComponents
                  week="3"
                  content="Сэдвийн хэлэлцүүлэг"
                  attend="1"
                  point="6"
                />
                <ProgressComponents
                  week="4"
                  content="Сэдвийн хэлэлцүүлэг"
                  attend="1"
                  point="10"
                />
              </View>
            )}

            <TouchableOpacity style={css.button} onPress={toggleExpand2}>
              <Text style={css.buttonText}>БИЕ ДААЛТ</Text>
            </TouchableOpacity>
            {isExpanded2 && (
              <View style={css.collapsibleContent}>
                <View style={{ marginBottom: 5 }}>
                  <Progress
                    input1="Нийт"
                    input2="авсан"
                    input3="алдсан"
                    intake="15"
                    present="8"
                    absent="7"
                  />
                </View>
                <AssignComponents
                  event="Бие Даалт 1"
                  content="Kualitas menyimpulkan masalah tepat, atau kerjasama kelompok baik atau tepat membuat ide baru."
                  date="10 сарын 26"
                  classMean={70}
                  totalMarks={12}
                  assignMark1={2}
                  assignMark2={2}
                  assignMark3={3}
                  assignMark4={2}
                />
                <AssignComponents
                  event="Бие Даалт 2"
                  content="Kualitas menyimpulkan masalah tepat, atau kerjasama kelompok baik atau tepat membuat ide baru."
                  date="10 сарын 26"
                  classMean={65}
                  totalMarks={12}
                  assignMark1={3}
                  assignMark2={2}
                  assignMark3={3}
                  assignMark4={2}
                />
              </View>
            )}
            <TouchableOpacity style={css.button} onPress={toggleExpand3}>
              <Text style={css.buttonText}>ШАЛГАЛТ</Text>
            </TouchableOpacity>
            {isExpanded3 && (
              <View style={css.collapsibleContent}>
                <View style={{ marginBottom: 5 }}>
                  <Progress
                    input1="Нийт"
                    input2="авсан"
                    input3="алдсан"
                    intake="15"
                    present="10"
                    absent="5"
                  />
                </View>
                <TestComponents
                  event="Явцын Шалгалт 1"
                  content="Kualitas menyimpulkan masalah tepat, atau kerjasama kelompok baik atau tepat membuat ide baru."
                  date="10 сарын 26"
                  totalMarks={15}
                  testMark1={3}
                  testMark2={2}
                  testMark3={3}
                  testMark4={1}
                  testMark5={3}
                />
                <TestComponents
                  event="Явцын Шалгалт 2"
                  content="Kualitas menyimpulkan masalah tepat, atau kerjasama kelompok baik atau tepat membuat ide baru."
                  date="10 сарын 26"
                  totalMarks={15}
                  testMark1={2.3}
                  testMark2={2}
                  testMark3={2}
                  testMark4={1}
                  testMark5={3}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const ScreenThree = () => (
  <View>
    <View style={{ gap: 3, top: 8 }}>
      <ScrollView>
        <MarkComponents
          event="Дүнгийн задаргаа"
          content="Kualitas menyimpulkan masalah tepat, atau kerjasama kelompok baik atau tepat membuat ide baru."
          totalMarks={100}
          generalAttendance={8}
          generalAttendanceMark={8}
          generalLab={25}
          generalLabMark={20}
          generalAssignment={30}
          generalAssignmentMark={25}
          generalTest={15}
          generalTestMark={10}
          generalFinal={30}
          generalFinalMark={0}
        />
      </ScrollView>
    </View>
  </View>
);

export default function Class2() {
  return (
    <View style={{ flex: 1 }}>
      <Header
        lesson="Програм хангамжийн төслийн менежмент"
        building="Шинэ Монгол Технологийн Дээд Сургууль"
        teacher="Д. Золжаргал"
        semester="Намар/2023"
        icon1={require("../assets/img/building1.png")}
        icon2={require("../assets/img/graduation.png")}
        icon3={require("../assets/img/flag.png")}
      />
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: "pink",
          },
        }}
      >
        <Tab.Screen name="Ирц" component={ScreenOne} />
        <Tab.Screen name="Явц" component={ScreenTwo} />
        <Tab.Screen name="Дүн" component={ScreenThree} />
      </Tab.Navigator>
      {/* <View>
        <Footer />
      </View> */}
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
    alignItems: "flex-start",
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
    fontSize: 12,
    fontWeight: "600",
    textAlign: "right",
  },
  text: {
    top: 5,
    color: "#303030",
    fontFamily: "Roboto",
    fontSize: 12,
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
  drawerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F2F3F5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    zIndex: 10,
  },
  drawerHandle: {
    alignItems: "center",
    paddingVertical: 8,
  },
  drawerContent: {
    padding: 16,
  },
  dragHandle: {
    height: 5,
    width: 50,
    borderRadius: 5,
    backgroundColor: "lightgray",
    alignSelf: "center",
    marginTop: 8,
  },
  drawerButton: {
    position: "absolute",
    borderColor: "#303030",
    borderWidth: 1,
    bottom: 45,
    alignSelf: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 6,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  button: {
    backgroundColor: "pink",
    borderRadius: 5,
    padding: 10,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  button: {
    backgroundColor: "pink",
    borderRadius: 5,
    padding: 10,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  collapsibleContent: {
    backgroundColor: "#f0f0f0",
    // padding: 10,
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
  },
  // calendarContainer: {
  //   backgroundColor: "#f0f0f0",
  // },
  // calendar: {
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: "#d9e1e8",
  // },
});
