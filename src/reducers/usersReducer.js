const usersInitialState = [];

const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case "GET_USERS": {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default usersReducer;
