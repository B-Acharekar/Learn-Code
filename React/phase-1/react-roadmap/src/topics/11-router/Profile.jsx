import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();
  return (
    <h2 className="text-xl font-semibold text-purple-700">
      👤 Profile of {username}
    </h2>
  );
}

export default Profile;
