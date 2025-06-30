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
    <div>
      <h2>🔍 useRef Hook Example</h2>

      <h3>DOM Access</h3>
      <input ref={inputRef} placeholder="Click button to focus me" />
      <button onClick={focusInput}>Focus Input</button>

      <hr />

      <h3>Mutable Values (No Re-render)</h3>
      <p><strong>countRef:</strong> {countRef.current}</p>
      <p><strong>renderCount (state):</strong> {renderCount}</p>
      <button onClick={increaseRefs}>Increase</button>
    </div>
  );
}

export default UseRefExample;
