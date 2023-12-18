import { Product } from '../types/product';
import { saveCartItemsToLocalStorage } from '../utils/saveCartItemsToLocalStorage';
type Cart = {
  cartItems: Product[];
};

/* SELECTORS */
export const getCart = (state: { cart: Cart }) => state.cart.cartItems;

/* ACTIONS */

const createActionName = (name: string) => `app/cart/${name}`;

const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const CLEAR_CART = createActionName('CLEAR_CART');
const UPDATE_QUANTITY = createActionName('UPDATE_QUANTITY');
const UPDATE_INFO = createActionName('UPDATE_INFO');

export const updateQuantity = (productId: string, quantity: number) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity },
});

export const updateAdditionalInfo = (
  cartItemId: string,
  updatedInfo: string,
) => ({
  type: UPDATE_INFO,
  payload: {
    cartItemId,
    updatedInfo,
  },
});

export const addToCart = (
  product: Product,
  quantity: string,
  additionalInfo: string,
) => ({
  type: ADD_TO_CART,
  payload: { product, quantity, additionalInfo },
});

export const removeFromCart = (productId: string) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

/* THUNKS */

/* INITIAL STATE */

const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
const initialState: Cart = {
  cartItems: cartItemsFromLocalStorage
    ? JSON.parse(cartItemsFromLocalStorage)
    : [],
};

/* REDUCER */

export default function cartReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TO_CART:
      const { product, stockQuantity, additionalInfo } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === product.id,
      );

      let updatedCartItems;

      if (existingItemIndex !== -1) {
        updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? {
                ...item,
                stockQuantity: item.stockQuantity + stockQuantity,
                additionalInfo: additionalInfo,
              }
            : item,
        );
      } else {
        updatedCartItems = [
          ...state.cartItems,
          {
            ...product,
            stockQuantity,
            additionalInfo,
          },
        ];
      }

      saveCartItemsToLocalStorage(updatedCartItems);

      return {
        ...state,
        cartItems: updatedCartItems,
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
      const { productId, stockQuantity: updatedQuantity } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === productId
            ? { ...item, stockQuantity: updatedQuantity }
            : item,
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
      localStorage.removeItem('cartItems');
      return { cartItems: [] };
    default:
      return state;
  }
}
