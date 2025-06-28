function FileStructure() {
  return (
    <div>
      <h2>React File Structure (Vite)</h2>
      <p>In Vite, the main files are:</p>
      <ul>
        <li><code>main.jsx</code> – Entry point that mounts the app.</li>
        <li><code>App.jsx</code> – Root component for your app.</li>
      </ul>
      <p>Mounting happens via:</p>
      <pre>{`ReactDOM.createRoot(document.getElementById('root')).render(<App />);`}</pre>
    </div>
  );
}

export default FileStructure;
