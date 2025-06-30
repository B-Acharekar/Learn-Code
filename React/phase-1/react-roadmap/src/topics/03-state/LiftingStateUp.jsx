import { useState } from "react";

// 🔸 Child Component A (input)
function NameInput({ name, onNameChange }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        Enter Name:
      </h3>
      <input
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Type your name"
        className="w-full px-3 py-2 rounded border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}

// 🔸 Child Component B (display)
function NameDisplay({ name }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        Display:
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        Hello, <strong>{name || "..."}</strong>!
      </p>
    </div>
  );
}

// 🔸 Common Parent
function LiftingStateUp() {
  const [name, setName] = useState("");

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-zinc-900 shadow rounded-lg space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Lifting State Up
      </h2>
      <NameInput name={name} onNameChange={setName} />
      <NameDisplay name={name} />
    </div>
  );
}

export default LiftingStateUp;
