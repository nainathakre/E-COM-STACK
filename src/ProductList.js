import React from 'react';
import Menu from './components/Menu';
import ProductListContainer from './components/ProductListContainer';
import Footer from './components/Footer';

function ProductList() {
  return (
    <div className="page-container">
      <Menu />
      <ProductListContainer />
      <Footer />
    </div>
  );
}

export default ProductList;
