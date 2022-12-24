import React from "react";
import { Link } from "react-router-dom";

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
                    <Link to="#">Company</Link>
                  </li>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Why choose us</Link>
                  </li>
                  <li>
                    <Link to="#">Pricing</Link>
                  </li>
                  <li>
                    <Link to="#">Testimonial</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-6 footer-menu">
                <ul>
                  <li>
                    <Link to="#">Resources</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Terms and condition</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12 sm-d-none">
                <ul>
                  <li>
                    <Link to="#">Product</Link>
                  </li>
                  <li>
                    <Link to="#">Project Management</Link>
                  </li>
                  <li>
                    <Link to="#">Time Tracker</Link>
                  </li>
                  <li>
                    <Link to="#">Time Schedule</Link>
                  </li>
                  <li>
                    <Link to="#">Lead generate</Link>
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
                <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
              </li>
              <li>
                <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
              </li>
              <li>
                <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
              </li>
              <li>
                <Link to="#"><i className="fa-brands fa-github"></i></Link>
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
