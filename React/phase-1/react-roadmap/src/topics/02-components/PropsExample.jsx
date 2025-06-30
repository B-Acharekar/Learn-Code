import React from 'react';

function PropsExample({ name, age }) {
  return (
    <div className="p-6 max-w-md mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md space-y-3">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Props Example</h2>
      <p className="text-gray-700 dark:text-gray-200">
        <span className="font-semibold">Name:</span> {name}
      </p>
      <p className="text-gray-700 dark:text-gray-200">
        <span className="font-semibold">Age:</span> {age}
      </p>
    </div>
  );
}

// Example usage:
// <PropsExample name="Alice" age={28} />

export default PropsExample;
