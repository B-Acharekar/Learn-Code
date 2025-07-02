import clsx from 'clsx';

export default function FilterButtons({ filter, setFilter }) {
  const buttons = ['all', 'active', 'completed'];

  return (
    <div className="flex justify-center gap-2 mt-6">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setFilter(btn)}
          className={clsx(
            'px-4 py-2 rounded-full border text-sm font-medium transition-colors',
            filter === btn
              ? 'bg-blue-600 text-white border-blue-600 shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
          )}
        >
          {btn[0].toUpperCase() + btn.slice(1)}
        </button>
      ))}
    </div>
  );
}
