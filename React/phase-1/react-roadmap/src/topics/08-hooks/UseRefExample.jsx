import { useRef, useState } from "react";

function UseRefExample() {
  const inputRef = useRef(null);     // 1️⃣ Access DOM
  const countRef = useRef(0);        // 2️⃣ Store mutable value
  const [renderCount, setRenderCount] = useState(0);

  const focusInput = () => {
    inputRef.current.focus(); // DOM access
  };

  const increaseRefs = () => {
    countRef.current += 1;           // ✅ Doesn't trigger re-render
    setRenderCount((prev) => prev + 1); // Just to show difference
  };

  return (
<div className="p-4 space-y-6">
  <h2 className="text-2xl font-semibold">🔍 useRef Hook Example</h2>

  <div>
    <h3 className="text-lg font-medium mb-2">DOM Access</h3>
    <div className="flex items-center gap-2">
      <input
        ref={inputRef}
        placeholder="Click button to focus me"
        className="border px-3 py-2 rounded w-64"
      />
      <button
        onClick={focusInput}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Focus Input
      </button>
    </div>
  </div>

  <hr className="my-4 border-gray-300" />

  <div>
    <h3 className="text-lg font-medium mb-2">Mutable Values (No Re-render)</h3>
    <p><strong>countRef:</strong> {countRef.current}</p>
    <p><strong>renderCount (state):</strong> {renderCount}</p>
    <button
      onClick={increaseRefs}
      className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      Increase
    </button>
  </div>
</div>

  );
}

export default UseRefExample;
