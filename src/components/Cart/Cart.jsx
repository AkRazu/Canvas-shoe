import React from "react";
import "./Cart.css";
const Cart = ({ product }) => {
  const { img, name, price} = product;
//   console.log(product);
  return (
    <div className="main-container">
      <div className="cart-product">
        <img src={img} alt="shoe" />
        <div className="text">
          <p>{name.slice(0,15)}</p>
          <div className="start">
            <p>${price}.00 USD</p>
            <div className="main-start">
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
