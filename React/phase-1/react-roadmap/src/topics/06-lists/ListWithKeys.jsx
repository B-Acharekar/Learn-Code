import { useState } from "react";

function ListWithKeys() {
  const [fruits, setFruits] = useState([
    { id: 101, name: "🍎 Apple" },
    { id: 102, name: "🍌 Banana" },
    { id: 103, name: "🍇 Grape" },
  ]);

  const shuffle = () => {
    const shuffled = [...fruits].sort(() => Math.random() - 0.5);
    setFruits(shuffled);
  };

  return (
    <div>
      <h2>React List Keys Example</h2>
      <button onClick={shuffle}>Shuffle</button>

      <h3>✅ Correct Keys (IDs):</h3>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>

      <h3>⚠️ Incorrect Keys (Indexes):</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListWithKeys;
