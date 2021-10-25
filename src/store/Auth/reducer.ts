import * as types from "./actionTypes";

interface IAuthState {
    isAuthenticated: boolean;
    user: any;
}
const initialState = { 
  user: null,
  token: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action }):IAuthState => {

  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS: {
      return {
        ...state,
        token: action.payload?.token,
        user: action.payload?.user,
      };
    }
    case types.SIGN_OUT_SUCCESS: {
      return initialState;
    }
    case types.LANGUAGE_CHANGE: {
      return {
        ...state,
        user: { ...state.user, lang: action.payload }
      };
    }
    case types.LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};