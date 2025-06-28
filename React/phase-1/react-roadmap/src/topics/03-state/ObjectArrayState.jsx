import { useState } from "react";

function ObjectArrayState() {
  const [user, setUser] = useState({ name: "", age: "" });
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, `Task ${todos.length + 1}`]);
  };

  return (
    <div>
      <h2>Updating Objects & Arrays</h2>

      <input
        placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        placeholder="Age"
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <p>
        User: {user.name}, Age: {user.age}
      </p>

      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ObjectArrayState;
