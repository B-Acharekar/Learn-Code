function CRAorViteSetup() {
  return (
    <div>
      <h2>create-react-app vs Vite Setup</h2>
      <p><strong>create-react-app (CRA):</strong> Official, batteries-included, slower dev server.</p>
      <pre>
        npx create-react-app my-app
      </pre>
      <p><strong>Vite:</strong> Lightning-fast, modern build tool using native ES modules.</p>
      <pre>
        npm create vite@latest my-app -- --template react
      </pre>
      <p>For learning, Vite is recommended for its speed and simplicity.</p>
    </div>
  );
}

export default CRAorViteSetup;
