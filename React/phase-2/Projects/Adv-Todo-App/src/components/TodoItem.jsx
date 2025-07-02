import { useState } from 'react';
import { FiEdit2, FiTrash2, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`p-4 rounded-lg border flex justify-between items-center group transition-all shadow-sm
  ${todo.completed
          ? 'bg-green-100 text-gray-500 line-through dark:bg-green-900/30 dark:text-gray-400'
          : 'bg-white text-black dark:bg-gray-800 dark:text-white'}
`}

    >
      <div
        className="flex items-center gap-3 flex-1"
        onClick={() => !isEditing && onToggle(todo.id)}
      >
        <button
          className={`text-xl transition-colors ${todo.completed ? 'text-green-500' : 'text-gray-400 group-hover:text-blue-500'
            }`}
          aria-label="Toggle complete"
        >
          <FiCheckCircle />
        </button>

        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') handleCancel();
            }}
            autoFocus
            className="flex-1 p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        ) : (
          <span className="flex-1">{todo.text}</span>
        )}
      </div>

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity ml-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleEdit();
          }}
          className="text-blue-500 hover:text-blue-700"
          aria-label="Edit task"
        >
          <FiEdit2 size={18} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(todo.id);
          }}
          className="text-red-500 hover:text-red-700"
          aria-label="Delete task"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </motion.div>
  );
}
