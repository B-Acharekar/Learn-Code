import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const { theme } = useTheme();

  // Load todos from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  // Save todos to localStorage when changed
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const completeAll = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  const isEmpty = filteredTodos.length === 0;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      } p-4`}
    >
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight">📝 Todo App</h1>
          <ThemeToggle />
        </header>

        {/* Todo Input */}
        <TodoInput setTodos={setTodos} todos={todos} />

        {/* Filters */}
        <FilterButtons filter={filter} setFilter={setFilter} />

        {/* Todo List Section */}
        <main className="mt-6 min-h-[150px]">
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {isEmpty ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-gray-500 dark:text-gray-400 mt-6"
                >
                  {todos.length === 0
                    ? 'Start by adding a task above 👆'
                    : 'No tasks match the selected filter.'}
                </motion.p>
              ) : (
                <TodoList
                  todos={filteredTodos}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onEdit={updateTodo}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </main>
        
        <footer className="mt-6 flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <button onClick={clearCompleted} className="hover:underline">
            Clear Completed
          </button>
          <button onClick={completeAll} className="hover:underline">
            Mark All Completed
          </button>
        </footer>
       
      </div>
    </div>
  );
}
