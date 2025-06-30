import { useState, useCallback } from "react";
import List from "./List";

function UseCallbackExample() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);

    const theme = {
        backgroundColor: dark ? "#222" : "#eee",
        color: dark ? "#fff" : "#000",
        padding: "1rem",
    };

    return (
        <div style={theme}>
            <h2>🧠 useCallback Hook Example</h2>

            <input
                type="number"
                value={number}
                onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    if (!isNaN(value)) setNumber(value);
                }}
            />

            <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>

            <List getItems={getItems} />
        </div>
    );
}

export default UseCallbackExample;
