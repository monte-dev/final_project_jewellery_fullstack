import { HiShoppingBag, HiArrowCircleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartReducer';
import { Button } from 'react-bootstrap';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (currentProduct, quantity) => {
    dispatch(addToCart(currentProduct, quantity));
  };

  return (
    <Card className={styles.productWrapper}>
      {/* <Card.Img variant="top" src={product.images[0].name} alt={product.name} /> */}
      <img
        alt={product.name}
        // src={currentProduct.images}
        src="/assets/images/products/placeholder.svg"
      ></img>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
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
        <div className={styles.productAction}>
          <input
            className={styles.productActionItem}
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Button
            onClick={() => handleAddToCart(product, quantity)}
            className={styles.productActionItem}
          >
            <span>Add To Cart</span>
            <HiShoppingBag className="mb-1 ms-2" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;