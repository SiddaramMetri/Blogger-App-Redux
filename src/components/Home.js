import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGetPosts } from "../actions/bloggeAction";

const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetPosts());
  });

  return (
    <div>
      <h2>Home Component</h2>
    </div>
  );
};

export default Home;
