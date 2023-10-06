import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../redux/productsReducer.js';
import { Badge, Button, Container, Row } from 'react-bootstrap';
import { HiShoppingBag, HiStar } from 'react-icons/hi';

import styles from './product.module.css';

const Product = () => {
  const { id } = useParams();
  const currentProduct = useSelector((state) => getProductById(state, id));

  // console.log(currentProduct);
  // console.log(id);
  // console.log(currentProduct.images[1].name);
  return (
    <Container className="p-5">
      <Row>
        <img alt={currentProduct.name} src={currentProduct.images}></img>
        <h3>{currentProduct.name}</h3>
        <ul className={styles.productList}>
          <li>{`Price: $${currentProduct.price}`}</li>
          <li>
            <span>Rating:</span>
            <HiStar />
            <span> {currentProduct.rating}</span>
          </li>
          <li>
            {currentProduct.stockQuantity > 5 ? (
              <Badge bg="success">Stock Available</Badge>
            ) : currentProduct.stockQuantity > 0 ? (
              <Badge bg="warning">Selling Fast</Badge>
            ) : (
              <Badge bg="danger">Out of Stock</Badge>
            )}
          </li>
        </ul>
        <p>{currentProduct.description}</p>
      </Row>
      <Button>
        <span className="p-2">Add To Cart</span>
        <HiShoppingBag className="mb-1 ms-2" />
      </Button>
    </Container>
  );
};
export default Product;
