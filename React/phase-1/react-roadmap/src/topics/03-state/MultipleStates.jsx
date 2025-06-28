import { useState } from "react";

function MultipleStates() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <h2>Multiple useState Hooks</h2>
      <input placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Enter age" onChange={(e) => setAge(Number(e.target.value))} />
      <p>
        Hello {name}, you are {age} years old.
      </p>
    </div>
  );
}

export default MultipleStates;
