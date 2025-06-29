import { useEffect, useState } from "react";

function CleanupEffect() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    return () => {
      console.log("Cleanup: Component is unmounting");
    };
  }, []);

  return (
    <div>
      <h2>useEffect: Cleanup</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Unmount Box" : "Mount Box"}
      </button>
      {visible && <Box />}
    </div>
  );
}

function Box() {
  useEffect(() => {
    console.log("Box Mounted");
    return () => console.log("Box Unmounted");
  }, []);

  return <div style={{ border: "1px solid gray", padding: "10px" }}>I'm the Box</div>;
}

export default CleanupEffect;
