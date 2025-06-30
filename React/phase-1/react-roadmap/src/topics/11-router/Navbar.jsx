import { Link } from "react-router-dom"; // ✅ Import Outlet

export default function Navbar() {
    return (
        <div>
            <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <Link to="/">🏠 Home</Link>
                <Link to="/about">ℹ️ About</Link>
                <Link to="/profile/john">👤 Profile</Link>
                <Link to="/topics">Topics</Link>
            </nav>
        </div>
    )
}
