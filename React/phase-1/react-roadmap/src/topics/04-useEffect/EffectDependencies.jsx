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
    <div>
      <h2>useEffect: Dependencies</h2>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}

export default EffectDependencies;
