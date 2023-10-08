import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ product }) => {
  return (
    <Card bg="white" border="light">
      <Card.Img variant="top" src={product.images[0].name} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <p>Price: ${product.price}</p>
        <Link to={`/product/${product.id}`} as={Card.Link}>
          Read More
        </Link>
        <input type="number" min={0} max={200}></input>

        <button>
          <HiOutlineShoppingCart />
          Add
        </button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
