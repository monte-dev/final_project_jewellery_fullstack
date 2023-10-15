import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getOrder = ({ order }) => order;

/* ACTIONS */

const createActionName = (name) => `app/order/${name}`;

const CREATE_ORDER = createActionName('CREATE_ORDER');
const CREATE_ORDER_ERROR = createActionName('CREATE_ORDER_ERROR');
const CLEAR_ORDER = createActionName('CLEAR_ORDER');

export const createOrderError = (errorMessage) => ({
  type: CREATE_ORDER_ERROR,
  payload: errorMessage,
});

export const createOrder = (orderData) => ({
  type: CREATE_ORDER,
  payload: orderData,
});

export const clearOrder = () => ({
  type: CLEAR_ORDER,
});
/* THUNKS */

export const createOrderRequest = (orderData) => {
  return async (dispatch) => {
    try {
      const options = {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(`${API_URL}/orders`, orderData, options);
      dispatch(createOrder(orderData));
    } catch (err) {
      console.log(err);
      dispatch(createOrderError(err.message));
    }
  };
};

/* INITIAL STATE */

const initialState = {
  order: null,
};

/* REDUCER */

export default function orderReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_ORDER:
      console.log(action.payload);
      return { ...state, order: action.payload };
    case CREATE_ORDER_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_ORDER:
      return null;
    default:
      return state;
  }
}
