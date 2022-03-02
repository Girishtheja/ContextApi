import React from "react";
import CountContextProvider from "./context/countContextProvider";
import MainScreen from "./src/screens/MainScreen";
export default function App() {
  return (
    <CountContextProvider>
      <MainScreen />
    </CountContextProvider>
  );
}