import { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Fetching Data
      </h2>

      {loading ? (
        <p className="text-indigo-600 dark:text-indigo-400">Loading...</p>
      ) : (
        <ul className="space-y-3 list-disc list-inside">
          {data.map((item) => (
            <li key={item.id} className="text-gray-800 dark:text-gray-100">
              <strong>{item.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchData;
