import { combineReducers } from 'redux';

const INITIAL_STATE = {
  logged_in: false,
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_LOGGED_IN':
      const new_state = {
        ...state,
        logged_in: action.payload,
      };
      return new_state;
    default:
      return state;
  }
};

export default combineReducers({
  login: LoginReducer,
});
