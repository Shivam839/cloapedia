import React from "react";
import "./AboutAuthor.css";
import {
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaLeaf,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

function AboutAuthor({ name }) {
  return (
    <div className="authorBox">
      <h4 className="small-title">About Author</h4>
      <div className="authorProfile">
        <img src="/image/author.jpg" alt="" style={{ borderRadius: "50%" }} />
        <div className="authorInfo">
          <h4>{name}</h4>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "26px",
              fontStyle: "italic",
            }}
          >
            Quisque sed tristique felis. Lorem visit my website amet,
            consectetur adipiscing elit. Phasellus quis mi auctor, tincidunt
            nisl eget, finibus odio. Duis tempus elit quis risus congue feugiat.
            Thanks for stop Cloapedia!
          </p>
          <div className="iconList">
            <ul
              style={{
                display: "flex",
                margin: "0",
                padding: "0",
                width: "30%",
                justifyContent: "space-between",
              }}
            >
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
        </div>
      </div>
    </div>
  );
}

export default AboutAuthor;
