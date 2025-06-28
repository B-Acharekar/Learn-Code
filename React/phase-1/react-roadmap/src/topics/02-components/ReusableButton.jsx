function ReusableButton({ text, onClick, style }) {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
}

// Example usage:
// <ReusableButton text="Click me" onClick={() => alert('Clicked!')} />

export default ReusableButton;
