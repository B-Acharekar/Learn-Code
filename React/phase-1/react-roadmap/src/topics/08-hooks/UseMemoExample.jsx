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
<div className={`p-4 rounded transition-colors duration-300 ${dark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
  <h2 className="text-xl font-semibold mb-4">⚡ useMemo Hook Example</h2>

  <input
    type="number"
    value={number}
    onChange={(e) => setNumber(parseInt(e.target.value))}
    className="border border-gray-300 rounded px-3 py-1 mb-4 mr-4 w-32"
  />

  <button
    onClick={() => setDark((prev) => !prev)}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    Toggle Theme
  </button>

  <div className="mt-6 p-4 bg-white dark:bg-gray-700 rounded shadow">
    <p className="text-lg font-medium">Doubled Value: {doubled}</p>
  </div>
</div>

  );
}

export default UseMemoExample;
