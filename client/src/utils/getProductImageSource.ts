import { IMAGE_PATH } from '../config';
import { Product } from '../types/product';

export function getProductImageSource(product: Product) {
  if (product.images.length > 0) {
    return IMAGE_PATH + 'products/' + product.images[0].name;
  } else {
    return IMAGE_PATH + 'placeholder.svg';
  }
}
