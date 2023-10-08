import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  fetchSingleProductFromAPI,
  getProductById,
} from '../../../redux/productsReducer.js';
import { Badge, Button, Container, Row } from 'react-bootstrap';
import { HiShoppingBag, HiStar } from 'react-icons/hi';

import styles from './product.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HiArrowLeft } from 'react-icons/hi';
import { addToCart } from '../../../redux/cartReducer.js';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentProduct = useSelector((state) => getProductById(state, id));
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (!currentProduct) {
      dispatch(fetchSingleProductFromAPI(id));
    }
  }, [dispatch, id, currentProduct]);
  // console.log(currentProduct.images[1].name);

  const handleAddToCart = (currentProduct, quantity) => {
    dispatch(addToCart(currentProduct, quantity));
  };

  return (
    <Container className={styles.product}>
      <Button
        variant="outline-dark"
        className="my-2 py-1"
        onClick={() => navigate('/')}
      >
        <HiArrowLeft className="mb-1 me-2" size={18} />
        <span className="fs-6">Return</span>
      </Button>
      {currentProduct ? (
        <Row>
          <div className={styles.productWrapper}>
            <aside className={styles.productImagesWrapper}>
              <img
                className={styles.productImage}
                alt={currentProduct.name}
                // src={currentProduct.images}
                src="/assets/images/products/placeholder.svg"
              ></img>
            </aside>
            <section className={styles.productInfo}>
              <h3>{currentProduct.name}</h3>
              <dl className={styles.productDescription}>
                <dd>
                  {currentProduct.stockQuantity > 5 ? (
                    <Badge bg="success">Stock Available</Badge>
                  ) : currentProduct.stockQuantity > 0 ? (
                    <Badge bg="warning">Selling Fast</Badge>
                  ) : (
                    <Badge bg="danger">Out of Stock</Badge>
                  )}
                </dd>
                <dd className="fs-3">{`$${currentProduct.price}`}</dd>
                <dd>
                  <span>Rating:</span>
                  <HiStar />
                  <span> {currentProduct.rating}</span>
                </dd>
              </dl>
              <p>{currentProduct.description}</p>
              <div className={styles.productAction}>
                <dt className={styles.productActionItem}>Quantity:</dt>
                <dd className={styles.productActionItem}>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </dd>
                <Button
                  onClick={() => handleAddToCart(currentProduct, quantity)}
                >
                  <span>Add</span>
                  <HiShoppingBag className="mb-1 ms-2" />
                </Button>
              </div>
            </section>
          </div>
        </Row>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};
export default Product;
