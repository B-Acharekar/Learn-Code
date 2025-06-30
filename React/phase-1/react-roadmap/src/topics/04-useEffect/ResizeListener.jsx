import { useEffect, useState } from "react";

function ResizeListener() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md transition-colors duration-300 text-center">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Window Width Listener
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Width: <span className="font-bold">{width}px</span>
      </p>
    </div>
  );
}

export default ResizeListener;
