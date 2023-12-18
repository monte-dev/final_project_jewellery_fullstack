import { HiShoppingBag, HiArrowCircleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartReducer';
import { Button } from 'react-bootstrap';
import styles from './ProductCard.module.css';
import { getProductImageSource } from '../../../utils/getProductImageSource.ts';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = (currentProduct, quantity) => {
    dispatch(addToCart(currentProduct, quantity));
  };
  let imgSrc = getProductImageSource(product);

  return (
    <Card className={styles.productWrapper} as="div" data-bs-theme="dark">
      <Card.Img
        variant="top"
        className={styles.productImage}
        src={imgSrc}
        alt={product.name}
      />
      <Card.Body>
        <Card.Title as="h5">{product.name}</Card.Title>
        <p>${product.price}</p>
        <Link
          to={`/product/${product.id}`}
          as={Card.Link}
          className={styles.productLink}
        >
          <HiArrowCircleRight className="mb-1" />
          Read More
        </Link>
        <br></br>
        {product.stockQuantity > 0 ? (
          <div className={styles.productAction}>
            <input
              className={styles.productActionItem}
              name="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <Button
              variant="none"
              onClick={() => handleAddToCart(product, quantity)}
              className={styles.productActionBtn}
            >
              <span>Add To Cart</span>
              <HiShoppingBag className="mb-1 ms-2" />
            </Button>
          </div>
        ) : (
          <div className={styles.productAction}>
            <Button
              variant="none"
              disabled
              className={styles.productActionBtnSecondary}
            >
              <span>Out of Stock</span>
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
