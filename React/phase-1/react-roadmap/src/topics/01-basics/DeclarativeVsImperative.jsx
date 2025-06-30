import React from 'react';

export default function DeclarativeVsImperative() {
  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto space-y-4 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold">Declarative vs Imperative Programming</h2>

      <p>
        <span className="font-semibold">Declarative:</span> Describe <em>what</em> you want. React handles the <em>how</em>.
      </p>

      <p>
        <span className="font-semibold">Imperative:</span> You manually write steps to update the UI (like in jQuery).
      </p>

      <p className="text-base">
        React favors a declarative approach for better readability and maintainability.
      </p>
    </div>
  );
}
