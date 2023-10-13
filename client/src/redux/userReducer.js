import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getCurrentUser = (state) => state.user;

/* ACTIONS */
const createActionName = (name) => `app/user/${name}`;

const REGISTER = createActionName('REGISTER');
const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

export const register = (user) => ({
  type: REGISTER,
  payload: user,
});

export const login = (user) => ({ type: LOG_IN, payload: user });

export const logout = () => ({
  type: LOG_OUT,
  payload: null,
});

/* THUNKS */
export const registerUserRequest = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, userData);
      dispatch(register(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const logoutUserRequest = () => {
  return async (dispatch) => {
    dispatch(logout());
  };
};

/* INITIAL STATE */
const initialState = {
  user: null,
};

/* REDUCER */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    case LOG_IN:
      return {
        ...state,
        user: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
