import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetail;
