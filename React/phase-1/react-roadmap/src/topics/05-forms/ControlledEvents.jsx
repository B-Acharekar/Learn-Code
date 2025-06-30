import { useState } from "react";

function ControlledEvents() {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Submitted Username: ${username}`);
    setUsername("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        Controlled Input Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter username"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ControlledEvents;
