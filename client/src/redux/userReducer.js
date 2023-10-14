import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getCurrentUser = (state) => state.user.user;
export const getUserError = (state) => state.user.error;

/* ACTIONS */
const createActionName = (name) => `app/user/${name}`;

const REGISTER = createActionName('REGISTER');
const LOG_IN = createActionName('LOG_IN');
const LOG_OUT = createActionName('LOG_OUT');

const LOGIN_ERROR = createActionName('LOGIN_ERROR');
const REGISTER_ERROR = createActionName('REGISTER_ERROR');
const RESET_ERROR = createActionName('RESET_ERROR');

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const registerError = (error) => ({
  type: REGISTER_ERROR,
  payload: error,
});

export const resetError = () => ({
  type: RESET_ERROR,
  payload: null,
});

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
export const loginUserRequest = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.status === 200 || res.status === 201) {
        const userData = await res.json();
        localStorage.setItem('loginCookie', JSON.stringify(userData));
        dispatch(login(userData));
      } else {
        const errorData = await res.json();
        console.error('Login failed:', errorData);
        dispatch(loginError(errorData));
      }
    } catch (error) {
      console.error('Login error', error);
      dispatch(loginError(error));
    }
  };
};

export const registerUserRequest = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, userData);
      dispatch(register(response.data));
    } catch (error) {
      console.error('Register error', error);
      dispatch(registerError(error));
    }
  };
};

export const logoutUserRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(logout());
      localStorage.removeItem('loginCookie');
    } catch (error) {
      console.error('Logout error', error);
    }
  };
};

/* INITIAL STATE */
const initialState = {
  user: null,
  error: null,
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
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
