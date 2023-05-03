import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShowPosts = (props) => {
  const userId = props.match.params.id;

  const users = useSelector((state) => {
    return state.users.find((user) => user.id == userId);
  });

  const posts = useSelector((state) => {
    return state.posts.filter((post) => post.userId == users.id);
  });

  return (
    <div>
      <hr />
      <h2>UserName : {users?.name}</h2>
      <hr />
      <h2>Posts - {posts.length} </h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/comments/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowPosts;
