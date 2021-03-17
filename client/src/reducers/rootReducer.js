const initialState = {
  isLogin: false,
  loggedInUser: {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN": {
      return {
        ...state,
        isLogin: true,
        loggedInUser: action.payload,
      };
    }
    case "ADMIN_LOGOUT": {
      return {
        ...state,
        isLogin: false,
        loggedInUser: {},
      };
    }
    default: {
      return state;
    }
  }
};
