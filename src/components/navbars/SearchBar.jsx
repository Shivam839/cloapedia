import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="seachcard">
      <input
        type="text"
        name=""
        id=""
        placeholder="What are you looking for?"
      />
      <div className="searchBtn">
        <FaSearch style={{ color: "#555555", fontSize: "24px" }} />
      </div>
    </div>
  );
}

export default SearchBar;
