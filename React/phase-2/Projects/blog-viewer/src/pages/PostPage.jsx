import { useParams } from 'react-router-dom';
import PostDetails from '../components/PostDetail';

function PostPage() {
  const { id } = useParams();

  return (
    <div className="min-w-screen min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <PostDetails id={id} />
      </div>
    </div>
  );
}

export default PostPage;
