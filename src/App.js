import Users from "./components/Users";
import Posts from "./components/Posts";
import Home from "./components/Home";
import { Link, Route } from "react-router-dom";
import ShowPosts from "./components/ShowPosts";
import ShowComments from "./components/ShowComments";
import { useDispatch } from "react-redux";
import {
  startGetComments,
  startGetPosts,
  startGetUsers,
} from "./actions/bloggeAction";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetComments());
    dispatch(startGetPosts());
    dispatch(startGetUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Blogger - App</h2>
      <ul style={{ listStyle: "none", display: "flex", gap: "50px" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>

      <Route path="/" component={Home} exact />
      <Route path="/users" component={Users} exact />
      <Route path="/posts" component={Posts} exact />

      <Route path={`/posts/:id`} component={ShowPosts} exact />
      <Route path={`/comments/:id`} component={ShowComments} exact />
    </div>
  );
}

export default App;
