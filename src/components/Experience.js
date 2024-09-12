import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";
import img9 from "./images/img9.png";
import img10 from "./images/img10.png";

import CarousalButton from "./CarousalButton";

const Experience = () => {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="content-section pt-2">
          <h1 className="text-center pt-2">My Experience</h1>
          <p className="text-center tc mt-3 ">
            I'm Working as a <em>Cyber Security Analyst</em> in{" "}
            <strong>Wipro Limited </strong>, since March 2022.
          </p>
          <p className="text-center pt-3 tc">
            <strong>My Certificates</strong>
          </p>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <div className="carousal-container">
              <Carousel
                interval={null}
                prevIcon={<CarousalButton dir="prev" />}
                nextIcon={<CarousalButton dir="next" />}
              >
                <Carousel.Item>
                  <a
                    href="https://www.credly.com/badges/93b06a21-51cb-4c26-a7dd-9bd2f274fcb2/public_url"
                    target="_blank"
                  >
                    <img className="car-ex-img" src={img5}></img>
                  </a>
                  <Carousel.Caption>
                    <div className="cr-bg-hd">
                      <h3>Introduction to Cybersecurity</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a
                    href="https://www.credly.com/badges/79007998-f330-4b3f-95f6-c340f961e815/public_url"
                    target="_blank"
                  >
                    <img className="car-ex-img" src={img6}></img>
                  </a>

                  <Carousel.Caption>
                    <div className="cr-bg-hd">
                      <h3>Networking Basics</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a
                    href="https://www.credly.com/badges/ee4092e7-c12c-4669-b44d-71adfd3afa30/public_url"
                    target="_blank"
                  >
                    <img className="car-ex-img" src={img7}></img>
                  </a>
                  <Carousel.Caption>
                    <div className="cr-bg-hd">
                      <h3>Networking Devices and Configuration</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a
                    href="https://www.credly.com/badges/56566613-6172-47e8-9fd9-6b63a3271231/public_url"
                    target="_blank"
                  >
                    <img className="car-ex-img" src={img8}></img>
                  </a>
                  <Carousel.Caption>
                    <div className="cr-bg-hd">
                      <h3>Cyber Threat Management</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a
                    href="https://www.credly.com/badges/665207b8-cc38-4ec3-bd37-d4d923f58670/public_url"
                    target="_blank"
                  >
                    <img className="car-ex-img" src={img9}></img>
                  </a>
                  <Carousel.Caption>
                    <div className="cr-bg-hd">
                      <h3>Network Defense</h3>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <a
                    href="https://www.credly.com/badges/ca8c367a-488b-40ad-ae4a-61eb7efee20c/public_url"
                    target="_blank"
                  >
                    <img className="car-ex-img" src={img10}></img>
                  </a>
                  <Carousel.Caption>
                    <div className="cr-bg-hd">
                      <h3>Endpoint Security</h3>
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
