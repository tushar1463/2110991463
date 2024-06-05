import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AllProductsPage from './components/AllProductsPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/products/:productId" element={<ProductDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
