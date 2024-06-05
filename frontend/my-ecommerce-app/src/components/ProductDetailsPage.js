import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import ProductDetail from './ProductDetail'; // Corrected import statement
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className="product-details-page">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailsPage;
