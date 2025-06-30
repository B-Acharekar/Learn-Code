import { useState } from "react";

function FunctionalUpdate() {
  const [count, setCount] = useState(0);

  const incrementTwice = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white dark:bg-zinc-800 shadow-md rounded-lg space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Functional Updates
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Count: <span className="font-semibold">{count}</span>
      </p>
      <button
        onClick={incrementTwice}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        +2 (functional)
      </button>
    </div>
  );
}

export default FunctionalUpdate;
