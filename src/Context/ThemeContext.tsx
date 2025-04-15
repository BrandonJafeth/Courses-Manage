import React from "react";


const ThemeContext = React.createContext({
    darkMode: false,
    toggleDarkMode: () => {}
  });
  

export default ThemeContext;