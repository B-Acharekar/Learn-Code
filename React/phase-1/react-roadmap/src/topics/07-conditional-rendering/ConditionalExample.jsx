import { useState, useEffect } from "react";

function ConditionalExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">🔄 Conditional Rendering</h2>

      {loading ? (
        <div className="text-center text-gray-500 animate-pulse">
          ⏳ Loading content...
        </div>
      ) : (
        <div className="space-y-4">
          {isLoggedIn ? (
            <h3 className="text-xl font-semibold text-green-600">
              Welcome back, user! 👋
            </h3>
          ) : (
            <h3 className="text-xl font-semibold text-red-600">
              Please log in 🔐
            </h3>
          )}

          {!isLoggedIn && (
            <p className="text-gray-600">You are not logged in yet.</p>
          )}

          <button
            onClick={toggleLogin}
            className={`px-4 py-2 rounded-lg text-white font-medium transition ${
              isLoggedIn
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ConditionalExample;
