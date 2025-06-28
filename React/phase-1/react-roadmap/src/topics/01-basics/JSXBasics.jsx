function JSXBasics() {
  return (
    <div>
      <h2>JSX Basics</h2>
      <p>JSX is a syntax extension for JavaScript that looks like HTML, but it's actually JS.</p>
      <ul>
        <li>Use <code>className</code> instead of <code>class</code></li>
        <li>Every tag must be closed (e.g., <code>&lt;br /&gt;</code>)</li>
        <li>Wrap multiple elements in a parent tag or fragment <code>&lt;&gt;&lt;/&gt;</code></li>
      </ul>
      <p>Example:</p>
      <pre>{`<div className="box">
  <h2>Hello</h2>
  <p>This is JSX!</p>
</div>`}</pre>
    </div>
  );
}

export default JSXBasics;
