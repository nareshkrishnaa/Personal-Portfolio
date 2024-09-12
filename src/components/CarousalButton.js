import React from "react";

const CarousalButton = (props) => {
  if (props.dir == "prev") {
    return (
      <div class="circle-icon">
        <i class="bi bi-chevron-left"></i>
      </div>
    );
  } else {
    return (
      <div class="circle-icon">
        <i class="bi bi-chevron-right"></i>
      </div>
    );
  }
};

export default CarousalButton;
