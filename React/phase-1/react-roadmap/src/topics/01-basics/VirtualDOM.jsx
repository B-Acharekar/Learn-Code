import React from 'react';

export default function VirtualDOM() {
  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto space-y-4 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold text-center">Virtual DOM</h2>

      <p className="text-lg leading-relaxed">
        React creates a lightweight in-memory representation of the real DOM called the{' '}
        <strong className="font-semibold">Virtual DOM</strong>.
      </p>

      <p className="text-lg leading-relaxed">
        It compares previous and current virtual DOM trees to determine the most efficient way
        to update the real DOM.
      </p>
    </div>
  );
}
