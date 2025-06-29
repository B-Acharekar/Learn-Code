import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ no page reload
    alert(`Value: ${inputRef.current.value}`);
    inputRef.current.value = ""; // clear manually
  };

  return (
    <div>
      <h2>Uncontrolled Input Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter something"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
