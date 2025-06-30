import React from 'react';

function ReturningJSX() {
  const title = "Welcome to JSX";

  return (
    <div className="p-6 max-w-md mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Returning JSX</h2>
      <p className="text-gray-700 dark:text-gray-300">
        JSX lets you write HTML-like syntax inside JavaScript.
      </p>
      <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{title}</h3>
    </div>
  );
}

export default ReturningJSX;
