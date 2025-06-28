function JSXExpressions() {
  const name = "React Learner";
  const num = 3;

  return (
    <div>
      <h2>Embedding Expressions in JSX</h2>
      <p>Hello, {name}!</p>
      <p>{num} + 2 = {num + 2}</p>
      <p>{num % 2 === 0 ? "Even" : "Odd"}</p>
    </div>
  );
}

export default JSXExpressions;
