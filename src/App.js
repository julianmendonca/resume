import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ThemeProvider from "./context/darkMode";
import "./DarkTheme.scss";

function App() {
  const [theme, setTheme] = useState(() =>
    window.localStorage.getItem("theme") !== null
      ? window.localStorage.getItem("theme")
      : "dark"
  );
  const setDarkTheme = () => {
    setTheme("dark");
  };
  const setLightTheme = () => {
    setTheme("light");
  };
  const switchTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const getTheme = () => {
    return theme;
  };
  return (
    <ThemeProvider>
      <div className={`App ${theme}`}>
        <Layout
          getTheme={getTheme}
          switchTheme={switchTheme}
          setDarkTheme={setDarkTheme}
          setLightTheme={setLightTheme}
        ></Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
