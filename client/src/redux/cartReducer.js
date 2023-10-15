/* SELECTORS */
export const getCart = ({ cart }) => cart.cartItems;

/* ACTIONS */

const createActionName = (name) => `app/cart/${name}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const CLEAR_CART = createActionName('CLEAR_CART');
const UPDATE_QUANTITY = createActionName('UPDATE_QUANTITY');
const UPDATE_INFO = createActionName('UPDATE_INFO');

export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity },
});

export const updateAdditionalInfo = (cartItemId, updatedInfo) => ({
  type: UPDATE_INFO,
  payload: {
    cartItemId,
    updatedInfo,
  },
});

export const addToCart = (product, quantity, additionalInfo) => ({
  type: ADD_TO_CART,
  payload: { product, quantity, additionalInfo },
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
      const { product, quantity, additionalInfo } = action.payload;
      const updatedItem = { ...product, quantity, additionalInfo };
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
    case UPDATE_QUANTITY:
      const { productId, quantity: updatedQuantity } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: updatedQuantity } : item,
        ),
      };
    case UPDATE_INFO:
      const { cartItemId, updatedInfo } = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === cartItemId
            ? { ...item, additionalInfo: updatedInfo }
            : item,
        ),
      };
    case CLEAR_CART:
      return { cartItems: [] };
    default:
      return state;
  }
}
