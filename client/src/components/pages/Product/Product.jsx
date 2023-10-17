import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  fetchSingleProductFromAPI,
  getProductById,
} from '../../../redux/productsReducer.js';
import { addToCart } from '../../../redux/cartReducer.js';
import { Badge, Button } from 'react-bootstrap';
import { HiShoppingBag, HiStar, HiArrowLeft } from 'react-icons/hi';
import LoadingSpinner from '../../features/LoadingSpinner/LoadingSpinner.jsx';
import { getProductImageSource } from '../../../utils/getProductImageSource.js';
import styles from './product.module.css';

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

  if (!currentProduct) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  let imgSrc = getProductImageSource(currentProduct);

  return (
    <div className={styles.product}>
      <Button
        variant="outline-dark"
        className="my-2 py-1"
        onClick={() => navigate('/')}
      >
        <HiArrowLeft className="mb-1 me-2" size={18} />
        <span className="fs-6">Return</span>
      </Button>
      {currentProduct ? (
        <div className={styles.productWrapper}>
          <aside className={styles.productImagesWrapper}>
            <img
              className={styles.productImage}
              alt={currentProduct.name}
              src={imgSrc}
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
              <dd
                className={styles.productPrice}
              >{`$${currentProduct.price.toLocaleString()}`}</dd>
              <dd>
                <HiStar className={styles.productPriceIcon} />
                <span> {currentProduct.rating}</span>
              </dd>
            </dl>
            <p>{currentProduct.description}</p>

            {currentProduct.stockQuantity > 0 ? (
              <>
                {' '}
                <dd className={styles.productActionItem}>
                  <textarea
                    className={styles.productAdditonalInfo}
                    placeholder="Additional request?"
                    name="additionalInfo"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                  ></textarea>
                </dd>
                <div className={styles.productAction}>
                  <dd className={styles.productActionItem}>
                    Quantity:
                    <input
                      className={styles.productActionItem}
                      name="quantity"
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value, 10))
                      }
                    />
                  </dd>
                  <Button
                    variant="none"
                    onClick={() =>
                      handleAddToCart(currentProduct, quantity, additionalInfo)
                    }
                    className={styles.productActionBtn}
                  >
                    <span>Add To Cart</span>
                    <HiShoppingBag className="mb-1 ms-2" />
                  </Button>
                </div>
              </>
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
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Product;
