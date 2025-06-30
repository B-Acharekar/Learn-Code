import { useState } from "react";

function DynamicList() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
  ]);

  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    const newItem = {
      id: Date.now(),
      text: input,
    };
    setItems((prev) => [...prev, newItem]);
    setInput("");
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdate = (id) => {
    const updated = prompt("Update item:");
    if (updated) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, text: updated } : item
        )
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-zinc-900 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Dynamic List</h2>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New item"
        />
        <button
          onClick={handleAdd}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white"
          >
            <span>{item.text}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleUpdate(item.id)}
                className="text-yellow-500 hover:text-yellow-600"
                title="Edit"
              >
                ✏️
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:text-red-600"
                title="Delete"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicList;
