import React, { useState } from "react";
import "./Categories.css";
import Beauty from "./Beauty";
import Fashion from "./Fashion";
import Travel from "./Travel";
import Architecture from "./Architecture";
import Recipes from "./Recipes";

function Categories() {
  const [showlist, setShowlist] = useState("");
  const handlelist = (e) => {
    document.querySelectorAll(".listitems li").forEach((item) => {
      item.classList.remove("active");
    });

    e.target.classList.add("active");
    setShowlist(e.target.textContent);
  };

  const renderContent = () => {
    switch (showlist) {
      case "Beauty":
        return <Beauty />;
      case "Fashion":
        return <Fashion />;
      case "Travel":
        return <Travel />;
      case "Architecture":
        return <Architecture />;
      case "Recipes":
        return <Recipes />;
      default:
        return <Beauty />;
    }
  };
  return (
    <div className="catagories">
      <div className="listitems" onClick={(e) => handlelist(e)}>
        <li>Beauty</li>
        <li>Fashion</li>
        <li>Travel</li>
        <li>Architecture</li>
        <li>Recipes</li>
      </div>
      <div className="dataItems">{renderContent()}</div>
    </div>
  );
}

export default Categories;
