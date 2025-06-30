import { useNavigate } from "react-router-dom";

function UserDetails() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Details</h2>
      <button onClick={() => navigate("/")}>Go Home 🏠</button>
    </div>
  );
}
export default UserDetails;
