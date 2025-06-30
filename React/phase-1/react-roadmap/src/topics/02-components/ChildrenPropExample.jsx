import React from 'react';

export default function ChildrenPropExample({ children }) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-sm bg-white dark:bg-zinc-800 space-y-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Children Prop Example
      </h2>
      <div className="text-gray-700 dark:text-gray-200">{children}</div>
    </div>
  );
}
