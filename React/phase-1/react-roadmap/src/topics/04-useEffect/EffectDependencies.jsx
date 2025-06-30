import { useEffect, useState } from "react";

function EffectDependencies() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("React");

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  useEffect(() => {
    console.log("Title changed:", title);
  }, [title]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        useEffect: Dependencies
      </h2>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Count: {count}
      </button>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-white"
        placeholder="Enter title"
      />
    </div>
  );
}

export default EffectDependencies;
