import { useEffect, useState } from "react";

function LifecycleEquivalents() {
  const [msg, setMsg] = useState("");

  // ComponentDidMount
  useEffect(() => {
    console.log("🔵 Mounted");
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    console.log("🟡 Updated");
  });

  // ComponentWillUnmount
  useEffect(() => {
    return () => {
      console.log("🔴 Unmounted");
    };
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md transition-colors duration-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        useEffect: Lifecycle Equivalents
      </h2>
      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type a message..."
        className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded-lg bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Message: <span className="font-medium">{msg}</span>
      </p>
    </div>
  );
}

export default LifecycleEquivalents;
