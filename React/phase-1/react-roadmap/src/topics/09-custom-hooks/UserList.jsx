import useUsers from "./useUsers";

function UserList() {
  const { users, loading } = useUsers();

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
export default  UserList;