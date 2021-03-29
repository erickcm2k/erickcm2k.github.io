import React, { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider.");
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const getCurrentTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setTheme(e.matches ? "dark" : "light");
      });
  }, []);

  const [theme, setTheme] = useState(getCurrentTheme);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const value = [theme, toggleTheme];
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
