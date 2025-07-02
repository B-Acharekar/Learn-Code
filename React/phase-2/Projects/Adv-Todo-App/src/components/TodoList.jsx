import TodoItem from './TodoItem';
import { motion, AnimatePresence } from 'framer-motion';

export default function TodoList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <section className="mt-6" aria-label="Todo list">
      <AnimatePresence>
        {todos.length === 0 ? (
          <motion.p
            className="text-gray-500 text-center mt-6 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            🎉 You have no tasks! Add one above.
          </motion.p>
        ) : (
          <motion.ul
            className="space-y-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            role="list"
          >
            {todos.map((todo) => (
              <motion.li
                key={todo.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <TodoItem
                  todo={todo}
                  onToggle={onToggle}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
}
