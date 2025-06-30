import { useState, useMemo } from "react";

function slowFunction(num) {
  console.log("⚙️ Running slow function...");
  for (let i = 0; i < 1e8; i++) {} // Simulate expensive loop
  return num * 2;
}

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const doubled = useMemo(() => slowFunction(number), [number]);

  const themeStyle = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "1rem",
    marginTop: "1rem"
  };

  return (
    <div>
      <h2>⚡ useMemo Hook Example</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prev) => !prev)}>
        Toggle Theme
      </button>

      <div style={themeStyle}>
        <p>Doubled Value: {doubled}</p>
      </div>
    </div>
  );
}

export default UseMemoExample;
