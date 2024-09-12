import React from "react";
import "./Intro.scss";
import MyWorkCarousal from "./MyWorkCarousal";

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
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="93b06a21-51cb-4c26-a7dd-9bd2f274fcb2"
          data-share-badge-host="https://www.credly.com"
        ></div>
        <script
          type="text/javascript"
          async
          src="//cdn.credly.com/assets/utilities/embed.js"
        ></script>
      </div>

      <div className="container content-section ">
        <h1 className="text-center pt-5 mb-5">Tech Skills</h1>
        <div className="">
          <div className="row">
            <div className="col-5 border border-5 display-6  p-3">
              Languages I speak (&gt;ᴗ•)
            </div>
            <div className="col-7 border border-5 display-6 text-blue p-3">
              HTML and CSS , JavaScript , JAVA
            </div>
          </div>

          <div className="row">
            <div className="col-5 border border-5 display-6  p-3">
              Tech Stack I know
            </div>
            <div className="col-7 border border-5 display-6 text-blue p-3">
              Bootstrap, React library, Git, SpringBoot, MySQL, Saas
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <h1 className="text-center pt-5">My Works</h1>
          <MyWorkCarousal />
        </div>
      </div>
    </>
  );
};

export default Intro;
