import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./MenuNavBar.css";
import { FaAngleDown } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
import Categories from "./Categories";
import Features from "./Features";
import { TiThMenu } from "react-icons/ti";

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
  const handleMenuBar = () => {
    console.log("handle menu bar");

    document.querySelector(".menuNavList").classList.toggle("disactive");
    const menuNavList = document.querySelector(".menuNavList");
    console.log(menuNavList); // Check the result in the console
  };

  return (
    <div className="menuNav">
      <button
        style={{
          width: "60px",
          height: "50px",
          background: "#3197d6",
          border: "none",
          borderRadius: "5px",
          display: "none",
        }}
        onClick={handleMenuBar}
      >
        {" "}
        <TiThMenu
          style={{
            fontSize: "2rem",
            color: "#fff",
          }}
        />
      </button>
      <ul className="menuNavList">
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
