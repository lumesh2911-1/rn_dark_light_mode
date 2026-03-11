import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from '../theme/colors';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();

  const [darkMode, setDarkMode] = useState(systemTheme === 'dark');

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const theme = darkMode ? DarkTheme : LightTheme;

  return (
    <ThemeContext.Provider value={{ theme, darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
