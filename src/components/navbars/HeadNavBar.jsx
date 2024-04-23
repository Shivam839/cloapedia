import React, { useState } from "react";
import {
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaStar,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import "./HeadNavBar.css";
import SearchBar from "./SearchBar";

function HeadNavBar() {
  const [num, setNum] = useState(0);

  const handleSearch = () => {
    setNum(num + 1);
  };

  return (
    <>
      {num % 2 !== 0 && <SearchBar />}

      <div className="headnav">
        <div className="iconList">
          <ul>
            <a href="">
              <li style={{ color: "#4b6ea9" }}>
                <FaFacebookF />
              </li>
            </a>
            <a href="">
              <li style={{ color: "#d44638" }}>
                <TfiYoutube />
              </li>
            </a>
            <a href="">
              <li style={{ color: "#d73533" }}>
                <FaPinterest />
              </li>
            </a>
            <a href="">
              <li style={{ color: "#1ab2f5" }}>
                <FaTwitter />
              </li>
            </a>
            <a href="">
              <li style={{ color: "#405de6" }}>
                <FaInstagram />
              </li>
            </a>
            <a href="">
              <li style={{ color: "#e86142" }}>
                <FaGooglePlusG />
              </li>
            </a>
          </ul>
        </div>
        <div className="writeList">
          <ul>
            <li>
              <FaStar style={{ color: "#fbb034" }} />
              Trends
            </li>
            <li>
              <AiFillThunderbolt style={{ color: "#d73533" }} />
              Hot Topics
            </li>
            <li>
              <IoPersonCircleOutline style={{ color: "#3197d6" }} />
              Write for us
            </li>
          </ul>
        </div>
        <div className={`searchBar`} onClick={handleSearch}>
          <FaSearch />
          Search
        </div>
      </div>
    </>
  );
}

export default HeadNavBar;
