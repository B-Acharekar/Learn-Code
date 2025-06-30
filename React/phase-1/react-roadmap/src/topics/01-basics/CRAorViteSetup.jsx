function CRAorViteSetup() {
  return (
    <div className="p-4 md:p-6 max-w-3xl mx-auto space-y-4 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold">create-react-app vs Vite Setup</h2>

      <p>
        <strong className="font-semibold">create-react-app (CRA):</strong>{" "}
        Official, batteries-included, but has a slower dev server.
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg font-mono text-sm overflow-x-auto">
        npx create-react-app my-app
      </pre>

      <p>
        <strong className="font-semibold">Vite:</strong> Lightning-fast,
        modern build tool using native ES modules.
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg font-mono text-sm overflow-x-auto">
        npm create vite@latest my-app -- --template react
      </pre>

      <p className="text-base">
        For learning, <span className="font-medium text-blue-600 dark:text-blue-400">Vite</span> is recommended for its speed and simplicity.
      </p>
    </div>
  );
}

export default CRAorViteSetup;
