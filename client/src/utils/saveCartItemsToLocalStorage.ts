import { Product } from '../types/product';

export const saveCartItemsToLocalStorage = (cartItems: Product[]) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
