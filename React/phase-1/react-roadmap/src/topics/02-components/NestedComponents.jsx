import React from 'react';

function Header() {
  return <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">This is the Header</h3>;
}

function Body() {
  return <p className="text-gray-700 dark:text-gray-200">This is the Body content.</p>;
}

function Footer() {
  return <small className="text-sm text-gray-500 dark:text-gray-400">This is the Footer.</small>;
}

function NestedComponents() {
  return (
    <div className="p-6 max-w-lg mx-auto space-y-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Nested Components</h2>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default NestedComponents;
