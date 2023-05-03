import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Users = (props) => {
  const users = useSelector((state) => {
    return state.users;
  });

  return (
    <div>
      <h2>Users -{users.length}</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/posts/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
