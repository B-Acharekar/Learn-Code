import { useState } from "react";

// 🔸 Child Component A (input)
function NameInput({ name, onNameChange }) {
  return (
    <div>
      <h3>Enter Name:</h3>
      <input
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Type your name"
      />
    </div>
  );
}

// 🔸 Child Component B (display)
function NameDisplay({ name }) {
  return (
    <div>
      <h3>Display:</h3>
      <p>Hello, <strong>{name}</strong>!</p>
    </div>
  );
}

// 🔸 Common Parent
function LiftingStateUp() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Lifting State Up</h2>
      <NameInput name={name} onNameChange={setName} />
      <NameDisplay name={name} />
    </div>
  );
}

export default LiftingStateUp;
