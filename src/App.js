import React from "react";
import { MyContextProvider } from "./test";
import Home from "./Home";

export default function App() {
  return (
    <MyContextProvider>
      <Home />
    </MyContextProvider>
  );
}
