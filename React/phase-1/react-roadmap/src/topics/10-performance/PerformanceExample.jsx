import { useState, useCallback, useMemo } from "react";
import ChildMemo from "./ChildMemo";

function PerformanceExample() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const users = useMemo(() => ["Alice", "Bob", "Charlie"], []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  const sayHello = useCallback(() => {
    console.log("Hello from parent!");
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold">🚀 Performance Optimization</h2>

      <p className="text-lg">
        Count: <span className="font-bold">{count}</span>
      </p>

      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Increment
      </button>

      <hr className="border-t border-gray-300" />

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div>
        {filteredUsers.map((name) => (
          <ChildMemo key={name} name={name} onClick={sayHello} />
        ))}
      </div>
    </div>
  );
}

export default PerformanceExample;
