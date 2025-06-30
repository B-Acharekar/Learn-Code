function JSXBasics() {
  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto space-y-4 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold">JSX Basics</h2>

      <p>
        JSX is a syntax extension for JavaScript that looks like HTML, but it's actually JS.
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          Use <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono text-sm">className</code> instead of <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono text-sm">class</code>
        </li>
        <li>
          Every tag must be closed (e.g., <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono text-sm">&lt;br /&gt;</code>)
        </li>
        <li>
          Wrap multiple elements in a parent tag or fragment <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded font-mono text-sm">&lt;&gt;&lt;/&gt;</code>
        </li>
      </ul>

      <p>Example:</p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg font-mono text-sm overflow-x-auto">
{`<div className="box">
  <h2>Hello</h2>
  <p>This is JSX!</p>
</div>`}
      </pre>
    </div>
  );
}

export default JSXBasics;
