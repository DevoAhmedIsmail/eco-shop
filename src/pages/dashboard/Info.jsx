import React from "react";
import { useSelector } from "react-redux";
import "../../css/info.css";

const Info = () => {
  const { products } = useSelector((state) => state.products);

  const productsList = products.map((product) => (
    <div className="info-item" key={product.id}>
      <p className="info-item_id">{product.id}</p>
      <img
        src={product.image}
        alt={product.title}
      />
      <p className="info-item_title">{product.title}</p>
      <p className="info-item_price">{product.price}$</p>
    </div>
  ));

  return (
    <section className="dashboard-info mt-5">
      <h2 className="main-heading">Products Info</h2>
      <div className="info-content mt-5">
        <div className="info-item">
          <p className="info-item_id text-bold">Id</p>
          <p className="text-bold">Image</p>
          <p className="info-item_title text-bold">Title</p>
          <p className="info-item_price text-bold">Price</p>
        </div>
        {productsList}
      </div>
    </section>
  );
};

export default Info;
