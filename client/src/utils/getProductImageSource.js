import { IMAGE_PATH } from '../config';

export function getProductImageSource(product) {
  if (product.images.length > 0) {
    return IMAGE_PATH + 'products/' + product.images[0].name;
  } else {
    return IMAGE_PATH + 'placeholder.svg';
  }
}
