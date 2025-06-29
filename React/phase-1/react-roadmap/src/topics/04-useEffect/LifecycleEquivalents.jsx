import { useEffect, useState } from "react";

function LifecycleEquivalents() {
  const [msg, setMsg] = useState("");

  // ComponentDidMount
  useEffect(() => {
    console.log("🔵 Mounted");
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    console.log("🟡 Updated");
  });

  // ComponentWillUnmount
  useEffect(() => {
    return () => {
      console.log("🔴 Unmounted");
    };
  }, []);

  return (
    <div>
      <h2>useEffect: Lifecycle Equivalents</h2>
      <input value={msg} onChange={(e) => setMsg(e.target.value)} />
      <p>Message: {msg}</p>
    </div>
  );
}

export default LifecycleEquivalents;
