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
    <div style={{ padding: "1rem" }}>
      <h2>🧮 useReducer Example</h2>
      <p>Count: <strong>{state.count}</strong></p>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>➕</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>➖</button>
      <button onClick={() => dispatch({ type: "RESET" })}>🔁 Reset</button>
    </div>
  );
}

export default UseReducerExample;
