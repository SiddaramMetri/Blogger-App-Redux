import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeComments, startGetComments } from "../actions/bloggeAction";

const ShowComments = (props) => {
  const postsId = props.match.params.id;

  const dispatch = useDispatch();

  const post = useSelector((state) => {
    return state.posts.find((post) => post.id == postsId);
  });

  const user = useSelector((state) =>
    state.users.find((ele) => ele.id == post.userId)
  );

  useEffect(() => {
    return () => {
      dispatch(removeComments());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(startGetComments(postsId));
  }, []);

  const comments = useSelector((state) => {
    return state.comments;
  });

  return (
    <div>
      <hr />
      <h2>
        UserName - <b>{user?.name}</b>
      </h2>
      <div style={{ fontSize: "20px" }}>
        <span>
          Title: <b>{post?.title}</b>
        </span>
        <br />
        <span>
          Body: <b>{post?.body}</b>
        </span>
      </div>
      <h2>Comments - {comments.length}</h2>
      <ul>
        {comments.map((comment) => {
          return <li key={comment.id}>{comment.body}</li>;
        })}
      </ul>
    </div>
  );
};

export default ShowComments;
