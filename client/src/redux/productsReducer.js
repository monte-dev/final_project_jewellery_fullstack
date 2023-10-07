import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getProducts = ({ products }) => products.all;
export const getProductById = ({ products }, id) =>
  products.singleProduct && products.singleProduct.id === id
    ? products.singleProduct
    : null;

/* ACTIONS */

const createActionName = (name) => `app/products/${name}`;

const FETCH_PRODUCTS = createActionName('FETCH_PRODUCTS');
const FETCH_SINGLE_PRODUCT = createActionName('FETCH_SINGLE_PRODUCT');

export const fetchProducts = (payload) => ({ type: FETCH_PRODUCTS, payload });
export const fetchSingleProduct = (product) => ({
  type: FETCH_SINGLE_PRODUCT,
  payload: product,
});

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

export const fetchSingleProductFromAPI = (productId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API_URL}/products/${productId}`);
      dispatch(fetchSingleProduct(res.data));
    } catch (error) {
      console.error('Error fetching single product:', error);
    }
  };
};

/* INITIAL STATE */

const initialState = {
  all: [],
  singleProduct: null,
};

/* REDUCER */

export default function productsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, all: action.payload };
    case FETCH_SINGLE_PRODUCT:
      return { ...state, singleProduct: action.payload };
    default:
      return state;
  }
}
