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
  const [additionalInfo, setAdditionalInfo] = useState('');

  useEffect(() => {
    if (!currentProduct) {
      dispatch(fetchSingleProductFromAPI(id));
    }
  }, [dispatch, id, currentProduct]);

  const handleAddToCart = (currentProduct, quantity, additionalInfo) => {
    dispatch(addToCart(currentProduct, quantity, additionalInfo));
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

              {currentProduct.stockQuantity > 0 ? (
                <>
                  {' '}
                  <dd className={styles.productActionItem}>
                    <textarea
                      placeholder="Additional request?"
                      name="additionalInfo"
                      value={additionalInfo}
                      onChange={(e) => setAdditionalInfo(e.target.value)}
                    ></textarea>
                  </dd>
                  <div className={styles.productAction}>
                    <dt className={styles.productActionItem}>Quantity:</dt>
                    <dd className={styles.productActionItem}>
                      <input
                        className={styles.productActionItem}
                        name="quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </dd>
                    <Button
                      onClick={() =>
                        handleAddToCart(
                          currentProduct,
                          quantity,
                          additionalInfo,
                        )
                      }
                      className={styles.productActionItem}
                    >
                      <span>Add To Cart</span>
                      <HiShoppingBag className="mb-1 ms-2" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className={styles.productAction}>
                  <Button variant="danger" className={styles.productActionItem}>
                    <span>Out of Stock</span>
                  </Button>
                </div>
              )}
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
