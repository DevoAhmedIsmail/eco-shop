import React from "react";
import '../css/about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  AOS.init();

  return (
    <main className="py-5">
      <div className="container">
        <h1 className="text-center">
          <span className="text-blue fw-bold">About</span> US
        </h1>
        {/* Vision */}
        <section className="vision">
          <div className="row">
            <div className="col-md-6 mt-5 pe-5" data-aos="fade-down-right">
              <h2>Our Vision</h2>
              <p
                className="text-color-light"
                style={{ fontSize: "1.1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                venenatis ut felis sed lobortis. Nunc accumsan at turpis nec
                varius. Nam vestibulum, lorem vel pharetra varius, ante ex
                vulputate massa.
                <br />
                <br />
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit
              </p>
              <button className="btn-more mt-3">Read More</button>
            </div>
            <div className="col-md-6 mt-5" data-aos="fade-down-left">
              <div className="about__image__wrapper">
                <img
                  src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="vision"
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Vision */}

        {/* Approch */}
        <section className="approch py-5">
          <div className="row">
            <div className="col-md-6 mt-5 pe-5" data-aos="fade-down-right">
              <div className="about__image__wrapper">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="approch"
                />
              </div>
            </div>
            <div className="col-md-6 mt-5" data-aos="fade-down-left">
              <h2>Our Approch</h2>
              <p
                className="text-color-light"
                style={{ fontSize: "1.1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                venenatis ut felis sed lobortis. Nunc accumsan at turpis nec
                varius. Nam vestibulum, lorem vel pharetra varius, ante ex
                vulputate massa.
                <br />
                <br />
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit
              </p>
              <button className="btn-more mt-3">Read More</button>
            </div>
          </div>
        </section>
        {/* End Approch */}

        {/* Process */}
        <section className="process">
          <div className="row">
            <div className="col-md-6 mt-5 pe-5" data-aos="fade-down-right">
              <h2>Our Process</h2>
              <p
                className="text-color-light"
                style={{ fontSize: "1.1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                venenatis ut felis sed lobortis. Nunc accumsan at turpis nec
                varius. Nam vestibulum, lorem vel pharetra varius, ante ex
                vulputate massa.
                <br />
                <br />
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit
              </p>
              <button className="btn-more mt-3">Read More</button>
            </div>
            <div className="col-md-6 mt-5" data-aos="fade-down-left">
              <div className="about__image__wrapper">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="process"
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Process */}
      </div>
      {/* End Container */}
    </main>
  );
}

export default About;
