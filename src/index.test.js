import React from "react";
import App from "./App";
import { create, act } from "react-test-renderer";

let renderer2;

it("Should render App correctly without act()?", () => {
  const renderer1 = create(<App />);
  expect(true).toBeTruthy();
});

it("Should render App correctly with act()?", async () => {
  act(() => {
    renderer2 = create(<App />);
  });
  await act(async () => {
    jest.runAllTimers();
  });
  expect(true).toBeTruthy();
});
