import React from "react";
import "./Product.css";
function Product() {
  return (
    <div className="Product">
      <div className="product_info">
        <p>The lean Startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://diwanegypt.com/wp-content/uploads/2020/09/9780670921607-1-scaled.jpg"
        alt=""
      />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
