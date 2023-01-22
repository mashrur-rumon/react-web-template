import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const DEFAULT_MODE = "dark"; //dark or light
  const prevTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(prevTheme);

  useEffect(() => {
    if (theme === null) {
      setTheme(DEFAULT_MODE);
    } else {
      setTheme(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", theme);
    } else {
      setTheme("light");
      localStorage.setItem("theme", theme);
    }
  };

  const contextValue = {
    theme: theme,
    toggle: toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
