import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeModeContext = createContext();

export const useTheme = () => useContext(ThemeModeContext);

export const ThemeModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Optionally, persist dark mode in localStorage
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.dataset.theme = 'dark';
    } else {
      document.documentElement.dataset.theme = 'light';
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <ThemeModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};