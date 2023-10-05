import axios from 'axios';
import { API_URL } from '../config';
import initialState from './initialState';

/* SELECTORS */
export const getProducts = ({ products }) => products;
export const getProduct = ({ products }, id) =>
  products.find((product) => product.id === id);

/* ACTIONS */

const createActionName = (name) => `app/products/${name}`;

const FETCH_PRODUCTS = createActionName('FETCH_PRODUCTS');

export const fetchProducts = (payload) => ({ type: FETCH_PRODUCTS, payload });

/* THUNKS */

export const fetchProductsFromAPI = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API_URL}/products`);
      dispatch(fetchProducts(res.data));
    } catch (error) {
      throw error;
    }
  };
};
/* REDUCER */

export default function productsReducer(
  state = initialState.products,
  action = {},
) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...action.payload];
    default:
      return state;
  }
}
