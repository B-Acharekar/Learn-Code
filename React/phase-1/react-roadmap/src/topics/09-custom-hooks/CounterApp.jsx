import useCounter from "./useCounter";

function CounterApp() {
    const { count, increment, decrement, reset } = useCounter(10);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>➕</button>
            <button onClick={decrement}>➖</button>
            <button onClick={reset}>🔁</button>
        </div>
    );
}

export default  CounterApp;