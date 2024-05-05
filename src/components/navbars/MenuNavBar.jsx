import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
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
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            Home
          </Link>
        </li>
        <li onClick={handleCategoryClick}>
          Category{" "}
          <FaAngleDown style={{ fontSize: "15px", fontWeight: "light" }} />
        </li>
        <li onClick={handleFeaturesClick}>
          Features{" "}
          <FaAngleDown style={{ fontSize: "15px", fontWeight: "light" }} />
        </li>
        <li>
          <Link to="/fashion" style={{ textDecoration: "none", color: "#000" }}>
            Fashion
          </Link>
        </li>
        <li>
          <Link to="/food" style={{ textDecoration: "none", color: "#000" }}>
            Food
          </Link>
        </li>
        <li>
          <Link
            to="/lifestyle"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Lifestyle
          </Link>
        </li>
        <li>
          <Link to="/travel" style={{ textDecoration: "none", color: "#000" }}>
            Travel
          </Link>
        </li>
        <li>
          <Link to="/vlogs" style={{ textDecoration: "none", color: "#000" }}>
            <MdSlowMotionVideo /> Vlogs
          </Link>
        </li>
        <li>
          <Link to="/health" style={{ textDecoration: "none", color: "#000" }}>
            Health
          </Link>
        </li>
      </ul>
      {showCategories && <Categories />}
      {showFeatures && <Features />}
    </div>
  );
}

export default MenuNavBar;
