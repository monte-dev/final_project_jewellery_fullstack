import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getOrder = ({ orders }) => orders;

/* ACTIONS */

const createActionName = (name) => `app/order/${name}`;

const CREATE_ORDER = createActionName('CREATE_ORDER');

export const createOrder = (orderData) => ({
  type: CREATE_ORDER,
  payload: orderData,
});
/* THUNKS */

export const createOrderRequest = (orderData) => {
  return async (dispatch) => {
    try {
      const options = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(`${API_URL}/orders`, orderData, options);
      dispatch(createOrder(orderData));
    } catch (err) {
      console.log(err);
    }
  };
};

/* INITIAL STATE */

const initialState = {
  orders: [],
};

/* REDUCER */

export default function orderReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_ORDER:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
