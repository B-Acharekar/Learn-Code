import React from 'react';

export default function WhyReact() {
  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto text-gray-800 dark:text-gray-100 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center">Why React Exists</h2>

      <p className="text-center text-lg leading-relaxed">
        React was created to solve the problem of building complex user interfaces
        with better performance and a cleaner developer experience.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-base md:text-lg">
        <li>UI updates are declarative, not manual DOM manipulations.</li>
        <li>
          Component-based architecture allows reuse and better organization.
          <ul className="list-disc pl-6 mt-2">
            <li>Efficient rendering using Virtual DOM.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
