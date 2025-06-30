import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex gap-4 mb-4">
        <Link to="/" className="hover:text-blue-600 transition">🏠 Home</Link>
        <Link to="/about" className="hover:text-blue-600 transition">ℹ️ About</Link>
        <Link to="/profile/john" className="hover:text-blue-600 transition">👤 Profile</Link>
        <Link to="/topics" className="hover:text-blue-600 transition">Topics</Link>
      </nav>
    </div>
  );
}
