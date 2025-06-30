function ReusableButton({ text, onClick, style }) {
  return (
    <button
      onClick={onClick}
      style={style}
      className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold 
                 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                 focus:ring-indigo-400 transition-colors dark:bg-indigo-500 
                 dark:hover:bg-indigo-600"
    >
      {text}
    </button>
  );
}

export default ReusableButton;
