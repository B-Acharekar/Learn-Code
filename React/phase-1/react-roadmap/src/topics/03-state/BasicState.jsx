import { useState } from "react";

function BasicState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Basic useState</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default BasicState;
