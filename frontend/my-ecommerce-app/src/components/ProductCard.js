import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
