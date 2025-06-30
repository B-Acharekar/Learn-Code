import React from 'react';

export default function SPAConcept() {
  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto space-y-4 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold">Single Page Application (SPA)</h2>

      <p>
        An <strong>SPA</strong> loads a single HTML page and dynamically updates the content without
        refreshing the page.
      </p>
      <p>
        <strong>React</strong> helps build SPAs by managing the view and enabling client-side routing.
      </p>
    </div>
  );
}
