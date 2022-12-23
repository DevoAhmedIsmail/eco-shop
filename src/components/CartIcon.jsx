import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context.js/ProductsContext";

function CartIcon() {
  // const { cart } = useContext(ProductsContext);
  const {cart} = useSelector(state=> state.cart)

  let showCart = cart.length > 0 ? "show" : "";

  return (
    <Link to="/cart">
      <div className={`cart-icon shadow ${showCart}`}>
        <span className="cart-count">{cart.length}</span>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </Link>
  );
}

export default CartIcon;
