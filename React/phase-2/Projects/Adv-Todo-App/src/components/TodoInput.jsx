import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';

export default function TodoInput({ todos, setTodos }) {
  const [text, setText] = useState('');
  const [showError, setShowError] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();

    const trimmed = text.trim();
    if (!trimmed) {
      setShowError(true);
      setTimeout(() => setShowError(false), 1000);
      return;
    }

    const newTodo = {
      id: uuid(),
      text: trimmed,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText('');
  };

  return (
    <form
      onSubmit={handleAdd}
      className="flex flex-col sm:flex-row gap-3 mt-6 items-start sm:items-stretch"
      role="form"
      aria-label="Add new todo"
    >
      <motion.div
        animate={showError ? { x: [-5, 5, -5, 5, 0] } : {}}
        className="w-full sm:flex-1"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Todo input"
          aria-invalid={showError}
          placeholder="What needs to be done?"
          className={`w-full px-4 py-2 rounded-lg shadow-sm border text-sm transition-all
          bg-white text-black border-gray-300
          focus:outline-none focus:ring-2 focus:ring-blue-500
          dark:bg-gray-800 dark:text-white dark:border-gray-600
          ${showError ? 'border-red-500 ring-red-300 dark:border-red-500' : ''}
        `}
        />

        <AnimatePresence>
          {showError && (
            <motion.p
              className="text-red-500 text-sm mt-1"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
            >
              Please enter a task.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
      >
        Add
      </button>
    </form>
  );
}
