import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Shoe from "../Shoe/Shoe";
import "./Shop.css";
const Shop = () => {
  const [shoes, setShoes] = useState([]);
  const [cart, setCart] = useState([]);
  const [random, setRandom] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setShoes(data.slice(0, 9)));
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
  //   console.log(cart);
  const chooseHandler = () => {
    const choose = cart[Math.floor(Math.random() * cart.length)];
    setRandom(choose);
  };
  const clearAllHandel = () => setCart([]) || setRandom([]);
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
        <hr />
        <div className="choose-product">
          {random === undefined ? (
            []
          ) : (
            <div className="random">
              <h3>Best product for you</h3>
              <div className="random-product">
                <img src={random?.img} alt="" />
                <p>{random?.name}</p>
              </div>
            </div>
          )}
        </div>
        <div className="button-container">
          <button onClick={chooseHandler} className="choose">
            Choose 1 for me
          </button>
          <button onClick={clearAllHandel} className="clear">
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
