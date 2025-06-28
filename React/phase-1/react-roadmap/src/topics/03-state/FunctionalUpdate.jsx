import { useState } from "react";

function FunctionalUpdate() {
  const [count, setCount] = useState(0);

  const incrementTwice = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Functional Updates</h2>
      <p>Count: {count}</p>
      <button onClick={incrementTwice}>+2 (functional)</button>
    </div>
  );
}

export default FunctionalUpdate;
