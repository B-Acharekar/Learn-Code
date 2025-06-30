import { useEffect, useState } from "react";

function UsersFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading)
    return (
      <p className="text-blue-500 font-semibold animate-pulse">⏳ Loading users...</p>
    );
  if (error)
    return (
      <p className="text-red-600 font-semibold">❌ Error: {error}</p>
    );

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">👥 Users (via fetch)</h2>
      <ul className="list-disc list-inside space-y-2">
        {users.map((user) => (
          <li key={user.id} className="text-gray-700">
            📛 {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersFetch;
