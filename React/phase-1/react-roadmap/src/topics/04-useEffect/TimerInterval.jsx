import { useEffect, useState } from "react";

function TimerInterval() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Timer Interval</h2>
      <p>Seconds passed: {count}</p>
    </div>
  );
}

export default TimerInterval;
