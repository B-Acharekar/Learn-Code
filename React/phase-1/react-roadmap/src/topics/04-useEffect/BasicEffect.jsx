import { useEffect, useState } from "react";

function BasicEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or updated");
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">useEffect: Basic</h2>
      
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Count: <span className="font-semibold">{count}</span>
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
      >
        +1
      </button>
    </div>
  );
}

export default BasicEffect;
