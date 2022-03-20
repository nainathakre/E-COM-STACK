import React, { useState, useEffect } from 'react';
import { isMobile, isTablet, isDesktop } from '../utilities';

function ProductListMain({ mobile, tablet, desktop }) {
  return (
    <section className="product-list-main">
      <section className="product-box">
        <h3>Fresho Kiwi - Green, 3 pcs</h3>
        <img
          src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
          alt="Fresho Kiwi - Green, 3 pcs"
          className="hide-on-tablet hide-on-mobile"
        />
        <section className="product-container-mobile only-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
            alt="Fresho Kiwi - Green, 3 pcs"
            className="hide-on-tablet"
          />
          <section className="product-details-mobile">
            <p>
              Kiwis are oval shaped with a brownish outer skin. The flesh is
              bright green and juicy with tiny, edible black seeds.
            </p>
            <button>But Now @ MRP Rs.87</button>
          </section>
        </section>
        <p className="hide-on-tablet hide-on-mobile">
          Kiwis are oval shaped with a brownish outer skin. The flesh is bright
          green and juicy with tiny, edible black seeds.
        </p>
        <section className="product-details-tablet hide-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
            alt="Fresho Kiwi - Green, 3 pcs"
          />
          <p>
            Kiwis are oval shaped with a brownish outer skin. The flesh is
            bright green and juicy with tiny, edible black seeds.
          </p>
        </section>
        <div className="price-cta-section hide-on-mobile">
          <span className="hide-on-tablet">MRP Rs.87</span>
          <button className="hide-on-tablet">Buy Now</button>
          <button className="hide-on-desktop">But Now @ MRP Rs.87</button>
        </div>
      </section>
      <section className="product-box">
        <h3>Apple - Washington, Regular, 4pcs</h3>
        <img
          src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/apple.jpg"
          alt="Apple - Washington, Regular, 4pcs"
          className="hide-on-tablet hide-on-mobile"
        />
        <section className="product-container-mobile only-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/apple.jpg"
            alt="Apple - Washington, Regular, 4pcs"
            className="hide-on-tablet"
          />
          <section className="product-details-mobile">
            <p>
              The bright read colored and heart shaped Washington apples are
              crunchy, juicy and slightly sweet. Washington apples are a
              natural.
            </p>
            <button>But Now @ MRP Rs.187</button>
          </section>
        </section>
        <p className="hide-on-tablet hide-on-mobile">
          The bright read colored and heart shaped Washington apples are
          crunchy, juicy and slightly sweet. Washington apples are a natural.
        </p>
        <section className="product-details-tablet hide-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/apple.jpg"
            alt="Apple - Washington, Regular, 4pcs"
          />
          <p>
            Kiwis are oval shaped with a brownish outer skin. The flesh is
            bright green and juicy with tiny, edible black seeds.
          </p>
        </section>
        <div className="price-cta-section hide-on-mobile">
          <span className="hide-on-tablet">MRP Rs.187</span>
          <button className="hide-on-tablet">Buy Now</button>
          <button className="hide-on-desktop">But Now @ MRP Rs.187</button>
        </div>
      </section>
      <section className="product-box">
        <h3>Fresho Pomogrante Peeled, 500gm</h3>
        <img
          src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/pomegrante.jpg"
          alt="Fresho Pomogrante Peeled, 500gm"
          className="hide-on-tablet hide-on-mobile"
        />
        <section className="product-container-mobile only-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/pomegrante.jpg"
            alt="Fresho Pomogrante Peeled, 500gm"
            className="hide-on-tablet"
          />
          <section className="product-details-mobile">
            <p>
              Pomogrante fruits have a glossy, vibrant and soft ruby-red skin.
              The inside of the fruit is divided into compartments by thin
              white.
            </p>
            <button>But Now @ MRP Rs.88</button>
          </section>
        </section>
        <p className="hide-on-tablet hide-on-mobile">
          Pomogrante fruits have a glossy, vibrant and soft ruby-red skin. The
          inside of the fruit is divided into compartments by thin white.
        </p>
        <section className="product-details-tablet hide-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/pomegrante.jpg"
            alt="Fresho Pomogrante Peeled, 500gm"
          />
          <p>
            Pomogrante fruits have a glossy, vibrant and soft ruby-red skin. The
            inside of the fruit is divided into compartments by thin white.
          </p>
        </section>
        <div className="price-cta-section hide-on-mobile">
          <span className="hide-on-tablet">MRP Rs.88</span>
          <button className="hide-on-tablet">Buy Now</button>
          <button className="hide-on-desktop">But Now @ MRP Rs.88</button>
        </div>
      </section>
      <section className="product-box">
        <h3>Capsicum, Green, 1kg</h3>
        <img
          src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/capsicum-green.jpg"
          alt="Capsicum, Green, 1kg"
          className="hide-on-tablet hide-on-mobile"
        />
        <section className="product-container-mobile only-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/capsicum-green.jpg"
            alt="Capsicum, Green, 1kg"
            className="hide-on-tablet"
          />
          <section className="product-details-mobile">
            <p>
              Leaving a moderately pungent taste on the tongue, Green capsicums,
              also known as green peppers are bell-shaped, medium sized fruit
              pods.
            </p>
            <button>But Now @ MRP Rs.137</button>
          </section>
        </section>
        <p className="hide-on-tablet hide-on-mobile">
          Leaving a moderately pungent taste on the tongue, Green capsicums,
          also known as green peppers are bell-shaped, medium sized fruit pods.
        </p>
        <section className="product-details-tablet hide-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/capsicum-green.jpg"
            alt="Capsicum, Green, 1kg"
          />
          <p>
            Leaving a moderately pungent taste on the tongue, Green capsicums,
            also known as green peppers are bell-shaped, medium sized fruit
            pods.
          </p>
        </section>
        <div className="price-cta-section hide-on-mobile">
          <span className="hide-on-tablet">MRP Rs.137</span>
          <button className="hide-on-tablet">Buy Now</button>
          <button className="hide-on-desktop">But Now @ MRP Rs.137</button>
        </div>
      </section>
      <section className="product-box">
        <h3>Fresho Kiwi - Green, 3 pcs</h3>
        <img
          src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
          alt="Fresho Kiwi - Green, 3 pcs"
          className="hide-on-tablet hide-on-mobile"
        />
        <section className="product-container-mobile only-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
            alt="Fresho Kiwi - Green, 3 pcs"
            className="hide-on-tablet"
          />
          <section className="product-details-mobile">
            <p>
              Kiwis are oval shaped with a brownish outer skin. The flesh is
              bright green and juicy with tiny, edible black seeds.
            </p>
            <button>But Now @ MRP Rs.87</button>
          </section>
        </section>
        <p className="hide-on-tablet hide-on-mobile">
          Kiwis are oval shaped with a brownish outer skin. The flesh is bright
          green and juicy with tiny, edible black seeds.
        </p>
        <section className="product-details-tablet hide-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
            alt="Fresho Kiwi - Green, 3 pcs"
          />
          <p>
            Kiwis are oval shaped with a brownish outer skin. The flesh is
            bright green and juicy with tiny, edible black seeds.
          </p>
        </section>
        <div className="price-cta-section hide-on-mobile">
          <span className="hide-on-tablet">MRP Rs.87</span>
          <button className="hide-on-tablet">Buy Now</button>
          <button className="hide-on-desktop">But Now @ MRP Rs.87</button>
        </div>
      </section>
      <section className="product-box">
        <h3>Fresho Kiwi - Green, 3 pcs</h3>
        <img
          src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
          alt="Fresho Kiwi - Green, 3 pcs"
          className="hide-on-tablet hide-on-mobile"
        />
        <section className="product-container-mobile only-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
            alt="Fresho Kiwi - Green, 3 pcs"
            className="hide-on-tablet"
          />
          <section className="product-details-mobile">
            <p>
              Kiwis are oval shaped with a brownish outer skin. The flesh is
              bright green and juicy with tiny, edible black seeds.
            </p>
            <button>But Now @ MRP Rs.87</button>
          </section>
        </section>
        <p className="hide-on-tablet hide-on-mobile">
          Kiwis are oval shaped with a brownish outer skin. The flesh is bright
          green and juicy with tiny, edible black seeds.
        </p>
        <section className="product-details-tablet hide-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
            alt="Fresho Kiwi - Green, 3 pcs"
          />
          <p>
            Kiwis are oval shaped with a brownish outer skin. The flesh is
            bright green and juicy with tiny, edible black seeds.
          </p>
        </section>
        <div className="price-cta-section hide-on-mobile">
          <span className="hide-on-tablet">MRP Rs.87</span>
          <button className="hide-on-tablet">Buy Now</button>
          <button className="hide-on-desktop">But Now @ MRP Rs.87</button>
        </div>
      </section>
      <section className="product-box">
        <h3>Fresho Kiwi - Green, 3 pcs</h3>
        <img
          src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
          alt="Fresho Kiwi - Green, 3 pcs"
          className="hide-on-tablet hide-on-mobile"
        />
        <section className="product-container-mobile only-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
            alt="Fresho Kiwi - Green, 3 pcs"
            className="hide-on-tablet"
          />
          <section className="product-details-mobile">
            <p>
              Kiwis are oval shaped with a brownish outer skin. The flesh is
              bright green and juicy with tiny, edible black seeds.
            </p>
            <button>But Now @ MRP Rs.87</button>
          </section>
        </section>
        <p className="hide-on-tablet hide-on-mobile">
          Kiwis are oval shaped with a brownish outer skin. The flesh is bright
          green and juicy with tiny, edible black seeds.
        </p>
        <section className="product-details-tablet hide-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
            alt="Fresho Kiwi - Green, 3 pcs"
          />
          <p>
            Kiwis are oval shaped with a brownish outer skin. The flesh is
            bright green and juicy with tiny, edible black seeds.
          </p>
        </section>
        <div className="price-cta-section hide-on-mobile">
          <span className="hide-on-tablet">MRP Rs.87</span>
          <button className="hide-on-tablet">Buy Now</button>
          <button className="hide-on-desktop">But Now @ MRP Rs.87</button>
        </div>
      </section>
      <section className="product-box">
        <h3>Fresho Kiwi - Green, 3 pcs</h3>
        <img
          src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
          alt="Fresho Kiwi - Green, 3 pcs"
          className="hide-on-tablet hide-on-mobile"
        />
        <section className="product-container-mobile only-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
            alt="Fresho Kiwi - Green, 3 pcs"
            className="hide-on-tablet"
          />
          <section className="product-details-mobile">
            <p>
              Kiwis are oval shaped with a brownish outer skin. The flesh is
              bright green and juicy with tiny, edible black seeds.
            </p>
            <button>But Now @ MRP Rs.87</button>
          </section>
        </section>
        <p className="hide-on-tablet hide-on-mobile">
          Kiwis are oval shaped with a brownish outer skin. The flesh is bright
          green and juicy with tiny, edible black seeds.
        </p>
        <section className="product-details-tablet hide-on-mobile">
          <img
            src="https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static/images/products/fruit-n-veg/kiwi-green.jpg"
            alt="Fresho Kiwi - Green, 3 pcs"
          />
          <p>
            Kiwis are oval shaped with a brownish outer skin. The flesh is
            bright green and juicy with tiny, edible black seeds.
          </p>
        </section>
        <div className="price-cta-section hide-on-mobile">
          <span className="hide-on-tablet">MRP Rs.87</span>
          <button className="hide-on-tablet">Buy Now</button>
          <button className="hide-on-desktop">But Now @ MRP Rs.87</button>
        </div>
      </section>
    </section>
  );
}

export default ProductListMain;
