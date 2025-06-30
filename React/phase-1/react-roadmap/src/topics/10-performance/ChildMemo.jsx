import React from "react";

const ChildMemo = React.memo(function ChildMemo({ name, onClick }) {
  console.log("🔁 Re-rendered: ", name);
  return (
    <div className="my-4 p-4 border border-dashed border-gray-400">
      <p>👶 Hi, I'm {name}</p>
      <button
        onClick={onClick}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Say Hello
      </button>
    </div>
  );
});

export default ChildMemo;
