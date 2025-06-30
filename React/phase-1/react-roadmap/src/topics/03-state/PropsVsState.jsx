import React from 'react';

// 🔹 Child component
function Greeting({ name }) {
  return (
    <h3 className="text-lg font-medium text-gray-800 dark:text-white">
      Hello, {name || "Guest"}!
    </h3>
  );
}

// 🔹 Parent component
function PropsVsState() {
  const [userName, setUserName] = React.useState("Guest");

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Props vs State</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <Greeting name={userName} />
    </div>
  );
}

export default PropsVsState;
