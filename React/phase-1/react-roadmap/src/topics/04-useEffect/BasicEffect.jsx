import { useEffect, useState } from "react";

function BasicEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or updated");
  });

  return (
    <div>
      <h2>useEffect: Basic</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default BasicEffect;
