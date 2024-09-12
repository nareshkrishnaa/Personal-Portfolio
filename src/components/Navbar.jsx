import React, { useState } from "react";

import "./Navbar.scss";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="container-fluid ">
        <nav className="navbar navbar-expand-md bg-body-tertiary">
          <div className="d-flex justify-content-between align-items-center container-xl">
            <div>
              <p className="display-4">Portfolio</p>
            </div>
            <div id="second-div" className="gap-4 d-none d-lg-flex">
              <div className="box">
                <h3>Home</h3>
              </div>
              <div className="box">
                <h3>Experience</h3>
              </div>
              <div className="box">
                <h3>My Works</h3>
              </div>
            </div>
            {/* -------- */}
            <div
              id="list-icon"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              style={{ fontSize: "2rem" }}
              className="d-lg-none d-flex justify-content-center align-items-center navbar-brand"
            >
              <div className="icon-inner">
                <i class="bi bi-list"></i>
              </div>
            </div>

            <div className=" d-none d-lg-flex">
              <a className="navbar-brand" style={{ fontSize: "2rem" }} href="#">
                <div className="icon d-flex justify-content-center align-items-center">
                  <div className="icon-inner">
                    <i class="bi bi-person-vcard-fill"></i>
                  </div>
                </div>
              </a>

              <a className="navbar-brand" style={{ fontSize: "2rem" }} href="#">
                <div className="icon d-flex justify-content-center align-items-center">
                  <div className="icon-inner">
                    <i class="bi bi-linkedin"></i>
                  </div>
                </div>
              </a>

              <a className="navbar-brand" style={{ fontSize: "2rem" }} href="#">
                <div
                  id="icon-git"
                  className="icon d-flex justify-content-center align-items-center"
                >
                  <div className="icon-inner">
                    <i class="bi bi-github"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* --------- */}

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel" className="display-4">
            Portfolio
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div className="" id="">
            <h4 className="text-underline">Navigate</h4>
            <div id="second-div" className="gap-2 d-flex flex-column">
              <div className="box">
                <h5>Home</h5>
              </div>
              <div className="box">
                <h5>Experience</h5>
              </div>
              <div className="box">
                <h5>My Works</h5>
              </div>
            </div>
            <h4 className="mt-5 text-underline mb-3">Contact Me</h4>
            <div className="d-flex gap-3">
              <a className="navbar-brand" style={{ fontSize: "2rem" }} href="#">
                <div className="icon d-flex justify-content-center align-items-center">
                  <div className="icon-inner">
                    <i class="bi bi-person-vcard-fill"></i>
                  </div>
                </div>
              </a>

              <a className="navbar-brand" style={{ fontSize: "2rem" }} href="#">
                <div className="icon d-flex justify-content-center align-items-center">
                  <div className="icon-inner">
                    <i class="bi bi-linkedin"></i>
                  </div>
                </div>
              </a>

              <a className="navbar-brand" style={{ fontSize: "2rem" }} href="#">
                <div
                  id="icon-git"
                  className="icon d-flex justify-content-center align-items-center"
                >
                  <div className="icon-inner">
                    <i class="bi bi-github"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
