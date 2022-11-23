import React from "react";
import "./Shoe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Shoe = ({ shoe, addProductHandel }) => {
  const { img, name, price } = shoe;
  // console.log(shoe);
  return (
    <div className="shoeSection">
      <div className="shoe-img">
        <img src={img} alt="shoe" />
      </div>
      <div className="shoe-tex">
        <h3>{name.slice(0, 20)}</h3>
        <h4>
          <del>$600.00 USD</del>
        </h4>
        <h3 className="shoe-price">${price}.00 USD</h3>
      </div>
      <div className="btn">
        <button onClick={() => addProductHandel(shoe)}>
          <p>buy now</p>{" "}
          <FontAwesomeIcon className="icon" icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Shoe;
