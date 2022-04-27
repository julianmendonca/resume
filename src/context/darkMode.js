import React from "react";
const Theme = React.createContext(undefined);
const themes = {
  light: "light",
  dark: "dark",
};
const ThemeProvider = ({ children, ...props }) => {
  const [currentTheme, setCurrentTheme] = React.useState(themes.dark);
  const setLightTheme = () => {
    setCurrentTheme(themes.light);
  };
  const setDarkTheme = () => {
    setCurrentTheme(themes.dark);
  };
  const contextValues = {
    currentTheme,
    themes,
    setLightTheme,
    setDarkTheme,
  };
  return (
    <Theme.Provider value={contextValues} {...props}>
      {children}
    </Theme.Provider>
  );
};

export default ThemeProvider;
