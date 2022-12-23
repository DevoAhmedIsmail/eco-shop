import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";
// fa-shake
function Card({ product }) {
  const [isHover, setIsHover] = useState(false);
  // const { addToCart } = useContext(ProductsContext);

  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Add to Cart
  const addToCartHandler = (id) => {
    const product = products.find((el) => el.id === id);
    dispatch(addToCart(product));
  };

  return (
    <li
      className="card shadow"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="1000"
    >
      <div className="image-wrapper">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} />
        </Link>
      </div>
      <div className="card-body mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="card-title text-dark">
            {product.title.substring(0, 40).concat("...")}
          </h3>
        </Link>
        <p>{product.description.substring(0, 60).concat("...")}</p>
        <p className="card-text text-bold">Price : {product.price}$</p>
        <button
          className="btn btn-primary my-2"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => addToCartHandler(product.id)}
        >
          <i
            className={
              isHover
                ? `fa-solid fa-cart-plus fa-shake`
                : `fa-solid fa-cart-plus`
            }
          ></i>{" "}
          Add to Cart
        </button>
      </div>
    </li>
  );
}

export default Card;
