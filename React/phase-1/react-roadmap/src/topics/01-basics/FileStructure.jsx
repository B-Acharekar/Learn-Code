function FileStructure() {
  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto space-y-4 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold">React File Structure (Vite)</h2>

      <p>In Vite, the main files are:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">main.jsx</code> – Entry point that mounts the app.
        </li>
        <li>
          <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">App.jsx</code> – Root component for your app.
        </li>
      </ul>

      <p>Mounting happens via:</p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg font-mono text-sm overflow-x-auto">
{`ReactDOM.createRoot(document.getElementById('root')).render(<App />);`}
      </pre>
    </div>
  );
}

export default FileStructure;
