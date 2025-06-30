import { useState } from "react";

function ObjectArrayState() {
  const [user, setUser] = useState({ name: "", age: "" });
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, `Task ${todos.length + 1}`]);
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Updating Objects & Arrays
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="w-full px-3 py-2 rounded border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          className="w-full px-3 py-2 rounded border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <p className="text-gray-700 dark:text-gray-300">
          <strong>User:</strong> {user.name || "—"}, <strong>Age:</strong> {user.age || "—"}
        </p>

        <button
          onClick={addTodo}
          className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
        >
          Add Todo
        </button>

        <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-100">
          {todos.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ObjectArrayState;
