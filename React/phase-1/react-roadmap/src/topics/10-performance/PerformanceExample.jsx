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
    <div>
      <h2>🚀 Performance Optimization</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <hr />
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((name) => (
        <ChildMemo key={name} name={name} onClick={sayHello} />
      ))}
    </div>
  );
}

export default PerformanceExample;
