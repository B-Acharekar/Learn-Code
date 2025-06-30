import ThemeProvider from "./context/ThemeProvider";
import DeepComponent from "./context/DeepComponent";

function UseContextExample() {
  return (
    <ThemeProvider>
      <div>
        <h2>🌐 useContext Hook Example</h2>
        <p>Theme toggle logic is global & avoids prop drilling 🚀</p>
        <DeepComponent />
      </div>
    </ThemeProvider>
  );
}

export default UseContextExample;
