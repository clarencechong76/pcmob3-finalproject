import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, Text, View, FlatList } from "react-native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import React, { useEffect }  from "react";
import * as SQLite from "expo-sqlite";
import { useState } from "react";
import NotesStack from "./screens/NotesStack";
import AddScreen from "./screens/AddScreen";


const db = SQLite.openDatabase("notes.db");


const InnerStack = createStackNavigator();


const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator mode="modal" headerMode="none">
       <Stack.Screen
         name="Notes Stack"
         component={NotesStack}
         options={{ headerShown: false }}
       />
       <Stack.Screen name="Add Note" component={AddScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#ffc",
   alignItems: "center",
   justifyContent: "center",
 },
});
