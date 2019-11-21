import React from "react";
import { useMyHook } from "./test";

export default function Home() {
  const value = useMyHook();
  if (value) {
    return <div>true</div>;
  }
  return <div>false</div>;
}
