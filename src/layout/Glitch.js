import React from "react";

//will add a glitch effect background by animating over the image
const Glitch = () => {
  return (
    <div class="glitch-demo">
    <div class="glitch">
      <div class="glitch__img"></div>
      <div class="glitch__img"></div>
      <div class="glitch__img"></div>     
      <div class="glitch__img"></div> 
      <div class="glitch__img"></div>
    </div>
  </div>
  );
};

//exports for use in other files
export default Glitch;