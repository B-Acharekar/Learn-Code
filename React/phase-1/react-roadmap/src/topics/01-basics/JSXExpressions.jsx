function JSXExpressions() {
  const name = "React Learner";
  const num = 3;

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto space-y-4 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold">Embedding Expressions in JSX</h2>

      <p className="text-base">
        Hello, <span className="font-semibold text-blue-600 dark:text-blue-400">{name}</span>!
      </p>

      <p className="text-base">
        {num} + 2 = <span className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">{num + 2}</span>
      </p>

      <p className="text-base">
        <span className="font-semibold">Number is:</span>{" "}
        <span className="italic text-green-600 dark:text-green-400">{num % 2 === 0 ? "Even" : "Odd"}</span>
      </p>
    </div>
  );
}

export default JSXExpressions;
