import React from "react";
import "./Categories.css";

function Beauty() {
  return (
    <div className="catogoriesItems">
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Spa</span>
        </div>
        <p>Top 10+ care advice for your toenails</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Beauty</span>
        </div>
        <p>The secret of your beauty is handmade soap</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Beauty</span>
        </div>
        <p>Benefits of face mask made from mud</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Spa</span>
        </div>
        <p>Relax with the unique warmth of candle flavor</p>
      </div>
    </div>
  );
}

export default Beauty;
