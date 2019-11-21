import React, { useState, createContext, useContext, useEffect } from "react";

export const MyContext = createContext({});
export const useMyHook = () => useContext(MyContext);

export const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState(false);

  const doSomething = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    setValue(true);
  };

  // this effects triggers the warning
  useEffect(() => {
    doSomething();
  }, []);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
