import React from "react";

//will add a glitch effect background by animating over the image
const Glitch = () => {
  return (
    <div className="glitch-demo">
    <div className="glitch">
      <div className="glitch__img"></div>
      <div className="glitch__img"></div>
      <div className="glitch__img"></div>     
      <div className="glitch__img"></div> 
      <div className="glitch__img"></div>
    </div>
  </div>
  );
};

//exports for use in other files
export default Glitch;
