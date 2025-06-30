import React from "react";

const ChildMemo = React.memo(function ChildMemo({ name, onClick }) {
  console.log("🔁 Re-rendered: ", name);
  return (
    <div style={{ margin: "1rem 0", padding: "1rem", border: "1px dashed gray" }}>
      <p>👶 Hi, I'm {name}</p>
      <button onClick={onClick}>Say Hello</button>
    </div>
  );
});

export default ChildMemo;
