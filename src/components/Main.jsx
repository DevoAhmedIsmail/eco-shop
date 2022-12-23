import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../store/productsSlice";
import Card from "./Card";
import CartIcon from "./CartIcon";
import LoadingSpinner from "./LoadingSpinner";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main() {
  AOS.init();

  const { products, isProductsLoading } = useSelector(
    (state) => state.products
  );

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
        <hr />
        {/* Best Phone section */}
        {/* <section className="best-phones py-5">
          <h1 className="mb-3 main-heading">Best Selling Smart Phones</h1>
          <div className="slider-wrapper mt-3">
            {<Slider cate={'electronics'} />}
          </div>
        </section> */}
        {/* End Phone section */}

        {/* Products items section which display all product with details */}
        <section className="products-items py-5">
          <h1 className="main-heading">Discover a new items</h1>
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

        {/* Testimonials Section */}
        <section className="testimonials py-5">
          <div className="text-center">
            <span className="testimonials__title">Testimonials</span>
            <h1 className="pt-2 fw-bold">
              What our Customers
              <br /> are saying
            </h1>
          </div>
          <div className="testimonials__content pt-3">
            {/* Testimonial Item */}
            <div className="testimonials__item" data-aos="fade-right" data-aos-duration="3000">
              <div className="row">
                <div className="testimonials__body col-6" >
                  <div className="star-icon">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="testimonials__text fw-bolder mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tempor mi a sem viverra, et aliquet.
                  </p>
                  <span className="testimonials__name fw-bold fs-5 mt-3">
                    Fakher Uddin
                  </span>
                  <span className="testimonials__job">UX/UI Designer</span>
                </div>
                <div className="testimonials__img col-6">
                  <div className="image-wrapper">
                    <img
                      src="https://media.istockphoto.com/id/1135085068/photo/young-man-experiencing-virtual-reality-eyeglasses-headset.jpg?s=612x612&w=0&k=20&c=uFw838FQlcGiDyvkJWNl9xwMqvKtY7g3CkxmeF-WzBo="
                      alt="testimonial-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Item */}
            <div className="testimonials__item" data-aos="fade-left" data-aos-duration="3000">
              <div className="row">
                <div className="testimonials__body col-6">
                  <div className="star-icon">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="testimonials__text fw-bolder mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tempor mi a sem viverra, et aliquet.
                  </p>
                  <span className="testimonials__name fw-bold fs-5 mt-3">
                    Famj
                  </span>
                  <span className="testimonials__job">UX/UI Designer</span>
                </div>
                <div className="testimonials__img col-6">
                  <div className="image-wrapper">
                    <img
                      src="https://media.istockphoto.com/id/1090878574/photo/handsome-man-playing-video-games-in-vr-goggles-or-3d-glasses-wearing-virtual-reality-headset.jpg?s=612x612&w=0&k=20&c=bejllB09b1FJWnMBhab26iI9EPAuQ2p7StLGm4JX1Vo="
                      alt="testimonial-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* EndTestimonials Section */}

        {/* Subscribe */}
        <section className="subscribe py-5">
          <h2 className="text-center fw-bold fs-1">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-center fw-bolder fs-5 ">
            And Get Full Updates On New Products
          </p>
          <div className="submit-container text-center d-flex justify-content-center align-items-center ">
            <input type="text" placeholder="Your Name" className="mr-4" />
            <input
              type="text"
              placeholder="Your Email Address"
              className="mr-4"
            />
            <button className="btn-more">Subscribe</button>
          </div>
        </section>
        {/* End Subscribe */}
      </div>
      {/* End Container */}
    </main>
  );
}

export default Main;
