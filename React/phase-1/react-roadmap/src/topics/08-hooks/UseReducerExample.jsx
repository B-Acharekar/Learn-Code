import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
<div className="p-4">
  <h2 className="text-xl font-semibold mb-4">🧮 useReducer Example</h2>

  <p className="text-lg mb-4">
    Count: <strong>{state.count}</strong>
  </p>

  <div className="space-x-2">
    <button
      onClick={() => dispatch({ type: "INCREMENT" })}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      ➕
    </button>
    <button
      onClick={() => dispatch({ type: "DECREMENT" })}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      ➖
    </button>
    <button
      onClick={() => dispatch({ type: "RESET" })}
      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
    >
      🔁 Reset
    </button>
  </div>
</div>

  );
}

export default UseReducerExample;
