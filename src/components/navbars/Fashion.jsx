import React from "react";
import "./Categories.css";

function Fashion() {
  return (
    <div className="catogoriesItems">
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Fashion</span>
        </div>
        <p>2017 summer stamp will have design models here</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Collection</span>
        </div>
        <p>Which color is the most suitable color for you?</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Fashion</span>
        </div>
        <p>Subscribe to these sites to keep an eye on the fashion</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Trends</span>
        </div>
        <p>The most trends of this year with color combination</p>
      </div>
    </div>
  );
}

export default Fashion;
