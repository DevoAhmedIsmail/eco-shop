import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProductsByCategory } from "../store/productsSlice";
import { addToCart } from "../store/cartSlice";
import CartIcon from "../components/CartIcon";
import Card from "../components/Card";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

function Product() {
  const [product, setProduct] = useState({});
  const [productsByCategory, setProductsByCategory] = useState({});
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const addToCartHandler = (id) => {
    const product = products.find((el) => el.id === id);
    dispatch(addToCart(product));
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    if (products.length > 0) {
      let thisProduct = products.filter((el) => el.id == productId)
      setProduct({...thisProduct[0]});
      let thisCategory = products.filter((el) => el.category == thisProduct[0].category);
      setProductsByCategory([...thisCategory]);
    }

    dispatch(getAllProductsByCategory(product.category));
  }, [dispatch, products,productId,product.category]);

  const allRelated = productsByCategory.length ? productsByCategory.filter((el) => el.id !== product.id) : [];

  const renderCard = allRelated.map((relateProduct) => (
    <div className="col-lg-4 mt-3" key={relateProduct.id}>
      <ul className="card-wrapper">
        <Card product={relateProduct} />
      </ul>
    </div>
  ));


  return (
    <section className="product-detail py-5">
      <div className="container">
        {/* Cart icon which show when any item added to cart */}
        <CartIcon />
        <div>
          <div className="container">
            {Object.values(product).length && (
              <div className="row">
                <div className="col-md-6">
                  <div className="left">
                    {/* <div className="image-wrapper">
                <img
                  src={product.img}
                  alt={product.title}
                />
              </div> */}

                    {/* Slider */}
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-bs-ride="true"
                    >
                      <div className="carousel-indicators">
                        <img
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                          src={product.image}
                        />
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item image-wrapper active">
                          <img
                            src={product.image}
                            className="d-block w-100"
                            alt={product.title}
                          />
                        </div>
                        <div className="carousel-item image-wrapper">
                          <img
                            src="https://f.nooncdn.com/cms/pages/20221208/b12a57c0686d7b432fc5ec2720ace3ae/ar_dk_eg-mega-03.png"
                            className="d-block w-100"
                            alt={product.title}
                          />
                        </div>
                        <div className="carousel-item image-wrapper">
                          <img
                            src={product.img}
                            className="d-block w-100"
                            alt={product.title}
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    {/* End Slider */}
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="">{product.title}</h3>
                  <p className="text-black-50">{product.description}</p>
                  <button
                    className="btn-more p-3"
                    onClick={() => addToCartHandler(product.id)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Relate Products */}
        <div className="relate-products pt-5">
          <h2 className="mb-5 main-heading">Relate Products</h2>
          <div className="row">
            {allRelated.length ? renderCard : <div className="text-center"><LoadingSpinner /></div>}
            
            </div>
        </div>
        {/* End Relate Products */}
      </div>
    </section>
  );
}

export default Product;
