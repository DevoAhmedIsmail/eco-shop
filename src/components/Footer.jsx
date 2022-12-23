import React from "react";

function Footer() {
  return (
    <footer className="bg-blue text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 pe-5">
            <h1 className="footer__logo">Eco-Shop</h1>
            <p className="mt-3">
               I made this site for learning, its just a fake website with fake
              data. I tried my best to code this site.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-4 col-sm-6 footer-menu">
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Why choose us</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Testimonial</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-6 footer-menu">
                <ul>
                  <li>
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms and condition</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12 sm-d-none">
                <ul>
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Project Management</a>
                  </li>
                  <li>
                    <a href="#">Time Tracker</a>
                  </li>
                  <li>
                    <a href="#">Time Schedule</a>
                  </li>
                  <li>
                    <a href="#">Lead generate</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 footer__subscribe">
            <h2>Subscribe</h2>
            <p>Subscribe to our Newsletter</p>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Enter Your Email"></input>
              <button>Search</button>
            </div>
          </div>
        </div>
        {/* End row */}
        <div className="copyright pt-5 d-flex justify-content-center ">
          <div className="copyright-container d-flex align-items-center">
            <p>
              Copyright &copy; 2022
              <span className="developer ms-2 "> Ahmed Ismail</span>
            </p>
            <ul className="d-flex">
              <li>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa-brands fa-github"></i></a>
              </li>
            </ul>
          </div>
        </div>
        {/* End Copyright */}
      </div>
      {/* End Container */}
    </footer>
  );
}

export default Footer;
