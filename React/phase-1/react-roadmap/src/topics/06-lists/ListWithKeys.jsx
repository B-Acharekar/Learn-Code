import { useState } from "react";

function ListWithKeys() {
  const initialFruits = [
    { id: 101, name: "🍎 Apple" },
    { id: 102, name: "🍌 Banana" },
    { id: 103, name: "🍇 Grape" },
  ];

  const [fruits, setFruits] = useState(initialFruits);

  const shuffle = () => {
    const shuffled = [...fruits].sort(() => Math.random() - 0.5);
    setFruits(shuffled);
    console.log("Shuffled:", shuffled.map(f => f.name).join(", "));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 rounded shadow bg-white dark:bg-zinc-900">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">React List Keys Example</h2>

      <button
        onClick={shuffle}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Shuffle
      </button>

      <div className="mb-4">
        <h3 className="font-semibold text-green-600">✅ Correct Keys (IDs):</h3>
        <ul className="list-disc pl-5">
          {fruits.map((fruit) => (
            <li key={fruit.id}>{fruit.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-yellow-600">⚠️ Incorrect Keys (Indexes):</h3>
        <ul className="list-disc pl-5">
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListWithKeys;
