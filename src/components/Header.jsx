import React from "react";
import laptop from '../images/laptop.PNG';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="header__left">
              <p  className="text-blue text-bold"> <i className="fa-solid fa-circle-check text-blue mr-4"></i>Powered Pro Designer</p>
              <h1 className="header__title">Work that we Produce for our <span className="text-blue text-bold">Costumers</span></h1>
              <p className="header__details text-color-light">
                Los Angeles search engine marketing agency with years of
                Experience doing SEO, Local SEO, Website SEO and Website
                Designing. Simpleit is all about exquisitely cozy solutions for
                small businessess.
              </p>
              <button className="btn-more">Explore More</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="header__right">
                <img src={laptop} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
