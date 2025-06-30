import useCounter from "./useCounter";

function CounterApp() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 text-center">
      <h2 className="text-2xl font-bold text-gray-800">🔢 Count: {count}</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          ➕
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          ➖
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          🔁
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
