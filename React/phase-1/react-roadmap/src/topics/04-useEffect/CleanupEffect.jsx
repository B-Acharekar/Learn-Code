import { useEffect, useState } from "react";

function CleanupEffect() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    return () => {
      console.log("Cleanup: Component is unmounting");
    };
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        useEffect: Cleanup
      </h2>
      <button
        onClick={() => setVisible(!visible)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        {visible ? "Unmount Box" : "Mount Box"}
      </button>
      {visible && <Box />}
    </div>
  );
}

function Box() {
  useEffect(() => {
    console.log("Box Mounted");
    return () => console.log("Box Unmounted");
  }, []);

  return (
    <div className="mt-4 border border-gray-400 dark:border-zinc-700 p-4 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-100">
      I'm the Box
    </div>
  );
}

export default CleanupEffect;
