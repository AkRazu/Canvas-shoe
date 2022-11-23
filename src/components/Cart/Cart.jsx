import React from "react";
import "./Cart.css";
const Cart = ({ product }) => {
  const { img, name} = product;
//   console.log(product);
  return (
    <div className="main-container">
      <div className="cart-product">
        <img src={img} alt="shoe" />
        <div className="text">
          <p>{name.slice(0,15)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
