/* SELECTORS */
export const getCart = ({ cart }) => cart.cartItems;

/* ACTIONS */

const createActionName = (name) => `app/cart/${name}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const CLEAR_CART = createActionName('CLEAR_CART');

export const addToCart = (product, quantity) => ({
  type: ADD_TO_CART,
  payload: { product, quantity },
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

/* THUNKS */

/* INITIAL STATE */

const initialState = {
  cartItems: [],
};

/* REDUCER */

export default function cartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      const { product, quantity } = action.payload;
      const updatedItem = { ...product, quantity };
      return {
        ...state,
        cartItems: [...state.cartItems, updatedItem],
      };

    case REMOVE_FROM_CART:
      const productRemovedId = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== productRemovedId,
        ),
      };
    case CLEAR_CART:
      return { cartItems: [] };
    default:
      return state;
  }
}
