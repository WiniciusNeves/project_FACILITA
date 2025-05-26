import React from "react";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <>
      <AppNavigator />
      <StatusBar style="dark" backgroundColor="#6C63FF" />
    </>
  );
}
