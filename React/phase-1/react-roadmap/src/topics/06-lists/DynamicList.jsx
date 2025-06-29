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
      id: Date.now(), // unique key
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
    <div>
      <h2>Dynamic List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New item"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}{item.id}{" "}
            <button onClick={() => handleUpdate(item.id)}>✏️</button>{" "}
            <button onClick={() => handleDelete(item.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicList;
