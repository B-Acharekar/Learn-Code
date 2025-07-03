import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostDetails({id}) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg animate-pulse">Loading post...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed">{post.body}</p>
      </div>

      <div className="mt-6">
        <Link
          to="/"
          className="inline-block px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md transition"
        >
          ← Back to Posts
        </Link>
      </div>
    </div>
  );
}

export default PostDetails;
