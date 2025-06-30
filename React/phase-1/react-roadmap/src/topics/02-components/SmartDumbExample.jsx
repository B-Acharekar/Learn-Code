import React from 'react';

// 🔹 Dumb (Presentational) Component
function UserCard({ name, onGreet }) {
  return (
    <div className="border border-gray-300 dark:border-zinc-700 rounded-lg p-4 shadow-sm bg-white dark:bg-zinc-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hello, {name}!</h3>
      <button
        onClick={onGreet}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
      >
        Greet
      </button>
    </div>
  );
}

// 🔹 Smart (Container) Component
function SmartDumbExample() {
  const handleGreet = () => {
    alert('Greetings from the Smart component!');
  };

  return (
    <div className="space-y-4 p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Smart vs Dumb Components</h2>
      <UserCard name="Alice" onGreet={handleGreet} />
      <UserCard name="Bob" onGreet={handleGreet} />
    </div>
  );
}

export default SmartDumbExample;
