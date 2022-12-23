import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import CartIcon from "../components/CartIcon";
import LoadingSpinner from "../components/LoadingSpinner";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Products() {
  const { products, isProductsLoading } = useSelector(
    (state) => state.products
  );

  AOS.init();

  const productsCard = products.map((product) => (
    <div className="col-md-6 col-lg-4 col-sm-12 mt-3 ps-0" key={product.id}>
      <ul className="card-wrapper">
        <Card product={product} />
      </ul>
    </div>
  ));

  return (
    <main className="position-relative">
      {/* Cart icon which show when any item added to cart */}
      <CartIcon />
      <div className="container">
        <section className="products-items py-5">
          <h1 className="main-heading">Browse Products</h1>
          <div className="container">
            <div className="row">
              {isProductsLoading ? (
                <div className="text-center py-5" style={{ width: "100%" }}>
                  <LoadingSpinner />
                </div>
              ) : (
                productsCard
              )}
            </div>
          </div>
        </section>
        {/* End Products items */}
      </div>
    </main>
  );
}

export default Products;
