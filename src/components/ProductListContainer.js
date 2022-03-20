import React, { useState, useEffect } from 'react';
import { isMobile, isTablet, isDesktop } from '../utilities';
import ProductListNav from './ProductListNav';
import ProductListNavMobile from './ProductListNavMobile';
import ProductListMain from './ProductListMain';

function ProductListContainer() {
  const [mobile, setIsMobile] = useState(false);
  const [tablet, setIsTablet] = useState(false);
  const [desktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      const mobile = isMobile();
      const tablet = isTablet();
      const desktop = isDesktop();
      setIsMobile(mobile);
      setIsTablet(tablet);
      setIsDesktop(desktop);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize');
  }, []);
  return (
    <div className="product-list-container">
      <ProductListNavMobile />
      <ProductListNav />
      <ProductListMain mobile={mobile} tablet={tablet} desktop={desktop} />
    </div>
  );
}

export default ProductListContainer;
