import React from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="container greeting-section d-lg-flex justify-content-center align-items-center">
          <div className="d-flex  flex-column flex-lg-row  justify-content-center align-items-center full-height">
            <div className="text-center text-lg-start">
              <p className="display-2 mt-lg-0 mt-5">
                Hi, I'm <strong>Naresh</strong>.
              </p>
              <p className="display-2 fs-1 ">
                I'm a Techie and an aspiring{" "}
                <strong>Front-End developer</strong>
              </p>
            </div>
          </div>
          <img
            src="https://mattfarley.ca/img/hero-devices.svg"
            className="intro-image d-block mx-auto mt-lg-0 mt-5"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Intro;
