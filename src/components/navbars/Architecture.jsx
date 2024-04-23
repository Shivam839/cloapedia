import React from "react";
import "./Categories.css";

function Architecture() {
  return (
    <div className="catogoriesItems">
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Places</span>
        </div>
        <p>A collection of the most beautiful shop designs</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Design</span>
        </div>
        <p>America's and Canada's most beautiful wine houses</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Minimalism</span>
        </div>
        <p>The most professional ways to color your walls</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Furnishings</span>
        </div>
        <p>Stylish cabinet designs and furnitures</p>
      </div>
    </div>
  );
}

export default Architecture;
