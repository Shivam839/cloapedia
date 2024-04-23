import React from "react";
import "./Categories.css";

function Travel() {
  return (
    <div className="catogoriesItems">
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Tourism</span>
        </div>
        <p>I visited the architects of Istanbul for you</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Travels</span>
        </div>
        <p>Prepared handmade dish dish in the Netherlands</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>City Tours</span>
        </div>
        <p>I recommend you visit the fairy chimneys</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Tourism</span>
        </div>
        <p>One of the most beautiful ports in the world</p>
      </div>
    </div>
  );
}

export default Travel;
