import React from "react";
import MyWorkCarousal from "./MyWorkCarousal";

const MyWorks = () => {
  return (
    <>
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

export default MyWorks;
