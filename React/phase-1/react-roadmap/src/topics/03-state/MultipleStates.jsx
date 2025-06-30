import { useState } from "react";

function MultipleStates() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div className="max-w-md mx-auto p-6 space-y-5 bg-white dark:bg-zinc-900 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Multiple useState Hooks
      </h2>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          className="w-full px-3 py-2 rounded border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <p className="text-gray-700 dark:text-gray-300">
        Hello <strong>{name || "..."}</strong>, you are <strong>{age || 0}</strong> years old.
      </p>
    </div>
  );
}

export default MultipleStates;
