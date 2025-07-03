import { Link } from 'react-router-dom';

function PostList({ posts }) {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
        Posts <span className="text-base font-normal text-gray-500">({posts.length})</span>
      </h1>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 15).map((post) => (
          <li
            key={post.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition duration-300 p-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                {post.body}
              </p>
            </div>

            <Link
              to={`/posts/${post.id}`}
              className="mt-4 inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
