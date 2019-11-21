import React from "react";
import App from "./App";
import { create, act } from "react-test-renderer";

// use fake timers when dealing with timeouts 
jest.useFakeTimers();

it("Should render App correctly without act()?", () => {
  // this isn't a great test, especially because there's async logic involved. 
  // it'll leak into other tests, unpredictably so 
  // you might still get an act warning with this.
  const tree = create(<App />);
  expect(tree).toMatchInlineSnapshot(`
    <div>
      false
    </div>
  `);  
});

it("Should render App correctly with act()?", async () => {  
  let tree;
  act(() => {
    tree = create(<App />);
  });
  
  // at this point, React would have 'committed',
  // and effects would have been triggered (starting the promise in doSomething())

  // act doesn't wait for timers or non-resolved promises,
  // so let's use this snippet to 'wait' for them to resolve
  await act(async () => {
    jest.runAllTimers();
  });

  // now the tree's as expected
  expect(tree).toMatchInlineSnapshot(`
    <div>
      true
    </div>
  `);
});
