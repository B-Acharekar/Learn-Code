import { useState } from "react";

function ControlledEvents() {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ prevent page reload
    alert(`Submitted Username: ${username}`);
    setUsername("");
  };

  return (
    <div>
      <h2>Controlled Input Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter username"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ControlledEvents;
