const commentsInitialState = [];

const commentsReducer = (state = commentsInitialState, action) => {
  switch (action.type) {
    case "SET_COMMENTS": {
      return [...action.payload];
    }
    case "REMOVE_COMMENTS": {
      return commentsInitialState;
    }
    default: {
      return [...state];
    }
  }
};

export default commentsReducer;
