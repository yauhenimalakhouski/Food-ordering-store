"use client";

import React, { useState } from "react";
const ThemeContext = React.createContext();

export const Provider = ({ children }) => {
  const [amount, setAmount] = useState(0);

  return (
    <ThemeContext.Provider value={amount}>{children}</ThemeContext.Provider>
  );
};
