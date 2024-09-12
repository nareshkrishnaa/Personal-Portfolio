import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import CarousalButton from "./CarousalButton";

const MyWorkCarousal = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="d-flex align-items-center justify-content-center mt-3">
          <div className="carousal-container">
            <Carousel
              interval={null}
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
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWorkCarousal;
