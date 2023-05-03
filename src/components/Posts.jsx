import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Posts = (props) => {
  const posts = useSelector((state) => {
    return state.posts;
  });

  return (
    <div>
      <hr />
      <h2>Posts -{posts.length}</h2>
      <hr />
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

export default Posts;
