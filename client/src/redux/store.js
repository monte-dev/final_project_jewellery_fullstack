import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import productsReducer from './productsReducer.js';
import usersReducer from './usersReducer.js';
import cartReducer from './cartReducer.js';

const subreducers = {
  products: productsReducer,
  cart: cartReducer,
  users: usersReducer,
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
