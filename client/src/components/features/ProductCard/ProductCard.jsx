const ProductCard = ({ product }) => {
  return (
    <div>
      <div>
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating} stars</p>
        <p>Stock Quantity: {product.stockQuantity}</p>
      </div>
    </div>
  );
};

export default ProductCard;
