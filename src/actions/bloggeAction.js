import axios from "axios";

// users
export const startGetUsers = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(getUsers(response.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const getUsers = (users) => {
  return {
    type: "GET_USERS",
    payload: users,
  };
};

// posts
export const startGetPosts = () => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        dispatch(getPosts(response.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const getPosts = (posts) => {
  return {
    type: "GET_POSTS",
    payload: posts,
  };
};

export const startGetComments = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => {
        dispatch(setComments(response.data));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const setComments = (comments) => {
  return {
    type: "SET_COMMENTS",
    payload: comments,
  };
};

export const removeComments = () => {
  return {
    type: "REMOVE_COMMENTS",
  };
};
