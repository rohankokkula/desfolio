// ThemeContext.jsx

import { createContext, useState, useEffect, useContext } from 'react';

// Define initial theme
const defaultTheme = 'light';

// Create context
const ThemeContext = createContext();

// Create provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Load saved theme from local storage (client-side only)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []); // Run only once on mount

  // Update local storage when theme changes (client-side only)
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]); // Run whenever theme changes

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume theme context
export const useTheme = () => useContext(ThemeContext);
