import { useNavigate } from "react-router-dom";

function UserDetails() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">User Details</h2>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Go Home 🏠
      </button>
    </div>
  );
}

export default UserDetails;
