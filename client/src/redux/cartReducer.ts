import { Product } from '../types/product';
import { saveCartItemsToLocalStorage } from '../utils/saveCartItemsToLocalStorage';

type CartItem = Product & {
  quantity: number;
  additionalInfo: string;
};

type Cart = {
  cartItems: CartItem[];
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
  type: typeof UPDATE_QUANTITY,
  payload: { productId, quantity },
});

export const updateAdditionalInfo = (
  cartItemId: string,
  updatedInfo: string,
) => ({
  type: typeof UPDATE_INFO,
  payload: {
    cartItemId,
    updatedInfo,
  },
});

export const addToCart = (
  product: string,
  quantity: number,
  additionalInfo: string,
) => ({
  type: typeof ADD_TO_CART,
  payload: { product, quantity, additionalInfo },
});

export const removeFromCart = (productId: string) => ({
  type: typeof REMOVE_FROM_CART,
  payload: productId,
});

export const clearCart = () => ({
  type: typeof CLEAR_CART,
});

/* THUNKS */

/* INITIAL STATE */
const storedCartItems = localStorage.getItem('cartItems');
const initialState: Cart = {
  cartItems: storedCartItems ? JSON.parse(storedCartItems) : [],
};
/* REDUCER */

export default function cartReducer(
  state: Cart = initialState,
  action: any = {},
) {
  switch (action.type) {
    case ADD_TO_CART:
      const { product, quantity, additionalInfo } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === product.id,
      );

      let updatedCartItems;

      if (existingItemIndex !== -1) {
        updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? {
                ...item,
                quantity: item.quantity + quantity,
                additionalInfo: additionalInfo,
              }
            : item,
        );
      } else {
        updatedCartItems = [
          ...state.cartItems,
          {
            ...product,
            quantity,
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
      localStorage.removeItem('cartItems');
      return { cartItems: [] };
    default:
      return state;
  }
}
