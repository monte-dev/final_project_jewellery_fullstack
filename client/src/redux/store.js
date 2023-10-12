import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import productsReducer from './productsReducer.js';
import userReducer from './userReducer.js';
import cartReducer from './cartReducer.js';
import orderReducer from './orderReducer';

const subreducers = {
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  order: orderReducer,
};

const rootReducer = combineReducers(subreducers);

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
);

export default store;
