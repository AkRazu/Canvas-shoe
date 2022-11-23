import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Shoe from "../Shoe/Shoe";
import "./Shop.css";
const Shop = () => {
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setShoes(data));
  }, []);
  const addProductHandel = (item) => {
    const newProduct = [...cart, item];
    setCart(newProduct);
    for (const product of cart) {
      if (product.id === item.id) {
        alert("Same product is not allow !!");
        const newProduct = [...cart];
        setCart(newProduct);
      }
    }
  };
  return (
    <div className="shop-container">
      <div className="shoe-container">
        {shoes.map((shoe, idx) => (
          <Shoe
            key={idx}
            shoe={shoe}
            addProductHandel={addProductHandel}
          ></Shoe>
        ))}
      </div>
      <div className="cart-container">
        <h1 className="shopping-header">Shopping Cart</h1>
        {cart.map((product, idx) => (
          <Cart key={idx} product={product}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Shop;
