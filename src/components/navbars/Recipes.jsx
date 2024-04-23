import React from "react";
import "./Categories.css";

function Recipes() {
  return (
    <div className="catogoriesItems">
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Vegetables</span>
        </div>
        <p>Grilled vegetable with fish prepared with fish</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Restuarants</span>
        </div>
        <p>The world's finest and clean meat restaurants</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Meat Food</span>
        </div>
        <p>Fried veal and vegetable dish</p>
      </div>
      <div className="cardItems">
        <div className="image">
          <img src="/image/blog_custom_01.jpg" alt="" />
          <span>Pastas</span>
        </div>
        <p>Tasty pasta sauces and recipes</p>
      </div>
    </div>
  );
}

export default Recipes;
