import React, { useState } from "react";
import "./MenuNavBar.css";
import { FaAngleDown } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
import Categories from "./Categories";
import Features from "./Features";

function MenuNavBar() {
  const [showCategories, setShowCategories] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const handleCategoryClick = () => {
    setShowCategories(!showCategories);
    setShowFeatures(false);
  };

  const handleFeaturesClick = () => {
    setShowFeatures(!showFeatures);
    setShowCategories(false);
  };

  return (
    <div className="menuNav">
      <ul>
        <li>Home</li>
        <li onClick={handleCategoryClick}>
          Category{" "}
          <FaAngleDown style={{ fontSize: "15px", fontWeight: "light" }} />
        </li>
        <li onClick={handleFeaturesClick}>
          Features{" "}
          <FaAngleDown style={{ fontSize: "15px", fontWeight: "light" }} />
        </li>
        <li>Fashion</li>
        <li>Food</li>
        <li>Lifestyle</li>
        <li>Travel</li>
        <li>
          <MdSlowMotionVideo /> Vlogs
        </li>
        <li>Health</li>
      </ul>
      {showCategories && <Categories />}
      {showFeatures && <Features />}
    </div>
  );
}

export default MenuNavBar;
