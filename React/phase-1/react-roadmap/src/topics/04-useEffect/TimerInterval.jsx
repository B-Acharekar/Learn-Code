import { useEffect, useState } from "react";

function TimerInterval() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md text-center transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        Timer Interval
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        ⏱️ Seconds passed: <span className="font-bold text-indigo-600 dark:text-indigo-400">{count}</span>
      </p>
    </div>
  );
}

export default TimerInterval;
