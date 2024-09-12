import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
// import img4 from "./images/img4.png";
// import img5 from "./images/img5.png";
// import img6 from "./images/img6.png";
// import img7 from "./images/img7.png";
// import img8 from "./images/img8.png";
// import img9 from "./images/img9.png";
// import img10 from "./images/img10.png";

import CarousalButton from "./CarousalButton";

const Experience = () => {
  return (
    <>
      <div className="container">
        <div className="content-section pt-5">
          <h1 className="text-center pt-5">My Experience</h1>
          <p className="text-center tc mt-5 pt-5 mb-5">
            I'm Working as a <em>Cyber Security Analyst</em> in{" "}
            <strong>Wipro Limited </strong>, since March 2022.
          </p>
          <p className="text-center pt-5 tc">
            <strong>My Certificates</strong>
          </p>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <div className="carousal-container">
              <Carousel
                prevIcon={<CarousalButton dir="prev" />}
                nextIcon={<CarousalButton dir="next" />}
              >
                <Carousel.Item>
                  <a
                    href="https://ebook-website-puce.vercel.app/index.html"
                    target="_blank"
                  >
                    <img className="car-img" src={img3}></img>
                  </a>
                  <Carousel.Caption>
                    <div className="cr-bg-hd">
                      <h3>E-Book Website</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a href="https://redbus-replica.vercel.app/" target="_blank">
                    <img className="car-img" src={img1}></img>
                  </a>

                  <Carousel.Caption>
                    <div className="cr-bg-hd">
                      <h3>Redbus Replica</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a
                    href="https://food-delivery-app-blue.vercel.app/"
                    target="_blank"
                  >
                    <img className="car-img" src={img2}></img>
                  </a>
                  <Carousel.Caption>
                    <div className="cr-bg-hd">
                      <h3>Food ordering Application</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a
                    href="https://ebook-website-puce.vercel.app/index.html"
                    target="_blank"
                  >
                    <img className="car-img" src={img3}></img>
                  </a>
                  <Carousel.Caption>
                    <div className="cr-bg-hd">
                      <h3>E-Book Website</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a
                    href="https://ebook-website-puce.vercel.app/index.html"
                    target="_blank"
                  >
                    <img className="car-img" src={img3}></img>
                  </a>
                  <Carousel.Caption>
                    <div className="cr-bg-hd">
                      <h3>E-Book Website</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a
                    href="https://ebook-website-puce.vercel.app/index.html"
                    target="_blank"
                  >
                    <img className="car-img" src={img3}></img>
                  </a>
                  <Carousel.Caption>
                    <div className="cr-bg-hd">
                      <h3>E-Book Website</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
