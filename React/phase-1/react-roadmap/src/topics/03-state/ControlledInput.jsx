import { useState } from "react";

function ControlledInput() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Email: ${email}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-zinc-800 shadow-md rounded-lg space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Controlled Input</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ControlledInput;
