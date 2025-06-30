import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function DeepComponent() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: darkMode ? "#333" : "#eee",
        color: darkMode ? "#fff" : "#000",
        padding: "1rem",
        marginTop: "1rem",
      }}
    >
      <h3>I’m a deep component</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default DeepComponent;
