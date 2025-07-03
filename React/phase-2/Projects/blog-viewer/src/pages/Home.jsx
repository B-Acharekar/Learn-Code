import { useEffect, useState } from "react";
import PostList from "../components/PostList";

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!res.ok) throw new Error("Failed to fetch posts");
                const data = await res.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
<div className="min-h-screen min-w-screen overflow-x-hidden dark:bg-gray-900 bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto">
    {/* Header */}
    <header className="mb-10 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-2 tracking-tight">
        📚 Latest Posts
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">
        Browse the latest blog posts fetched from the API
      </p>
    </header>

    {/* Loading Spinner */}
    {loading && (
      <div className="flex flex-col justify-center items-center h-40 space-y-3">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-600 dark:text-gray-300 text-lg font-medium">
          Loading posts...
        </span>
      </div>
    )}

    {/* Error Message */}
    {error && (
      <div className="bg-red-100 dark:bg-red-200 border border-red-300 text-red-700 px-5 py-4 rounded-xl shadow text-center max-w-xl mx-auto">
        <strong>Error:</strong> {error}
      </div>
    )}

    {/* Post List */}
    {!loading && !error && <PostList posts={posts} />}
  </div>
</div>

    );
}

export default Home;
