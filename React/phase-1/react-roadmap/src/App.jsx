import { Link, Outlet } from "react-router-dom"; // ✅ Import Outlet
import './App.css'

function App() {
  return (
    <>
      <div>
        <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <Link to="/home">🏠 Home</Link>
          <Link to="/about">ℹ️ About</Link>
          <Link to="/profile/john">👤 Profile</Link>
          <Link to="/topics">Topics</Link>
        </nav>

        <Outlet /> {/* ✅ This renders the matching child route's component */}
      </div>
    </>
  );
}

export default App;
