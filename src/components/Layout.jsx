// Layout.jsx
import React, { useState } from 'react';

export const DarkModeContext = React.createContext();

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`layout ${darkMode ? 'dark-mode' : ''}`}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

export default Layout;
