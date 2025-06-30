import { useState, useEffect } from "react";

function ConditionalExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate loading (skeleton/fallback)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div>
      <h2>🔄 Conditional Rendering</h2>

      {/* Skeleton UI */}
      {loading ? (
        <div>⏳ Loading content...</div>
      ) : (
        <div>
          {/* if/else using ternary operator */}
          {isLoggedIn ? (
            <h3>Welcome back, user! 👋</h3>
          ) : (
            <h3>Please log in 🔐</h3>
          )}

          {/* Show/hide button using && */}
          {!isLoggedIn && <p>You are not logged in yet.</p>}

          <button onClick={toggleLogin}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ConditionalExample;
