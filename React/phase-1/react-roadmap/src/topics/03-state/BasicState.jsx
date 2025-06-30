import { useState } from "react";

function BasicState() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-md mx-auto p-6 space-y-4 bg-white dark:bg-zinc-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Basic useState</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition"
      >
        +1
      </button>
    </div>
  );
}

export default BasicState;
