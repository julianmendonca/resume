import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import ThemeProvider from "./context/darkMode";
import "./DarkTheme.scss";

function App() {
  const [theme, setTheme] = useState("dark");
  const setDarkTheme = () => {
    setTheme("dark");
  };
  const setLightTheme = () => {
    setTheme("light");
  };
  return (
    <ThemeProvider>
      <div className={`App ${theme}`}>
        <Layout
          setDarkTheme={setDarkTheme}
          setLightTheme={setLightTheme}
        ></Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
