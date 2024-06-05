import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../services/api';
import ProductCard from './ProductCard';
import './AllProductsPage.css';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="all-products-page">
      <h1>All Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
