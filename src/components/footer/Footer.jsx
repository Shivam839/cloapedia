import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";
import { BiMessageAltCheck } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer">
      <div className="post">
        <div className="RecentPost recentPost">
          <h2>Recent Post</h2>
          <div className="postCard">
            <img src="/image/blog_square_09.jpg" alt="" />
            <div className="info">
              <h3>5 Beautiful buildings you need to before dying</h3>
              <p style={{ fontSize: "1rem" }}>12 Jan, 2016</p>
            </div>
          </div>
          <div className="postCard">
            <img src="/image/blog_square_09.jpg" alt="" />
            <div className="info">
              <h3>5 Beautiful buildings you need to before dying</h3>
              <p style={{ fontSize: "1rem" }}>12 Jan, 2016</p>
            </div>
          </div>
          <div className="postCard">
            <img src="/image/blog_square_09.jpg" alt="" />
            <div className="info">
              <h3>5 Beautiful buildings you need to before dying</h3>
              <p style={{ fontSize: "1rem" }}>12 Jan, 2016</p>
            </div>
          </div>
        </div>
        <div className="RecentPost popularPost">
          <h2>Popular Post</h2>
          <div className="postCard">
            <img src="/image/blog_square_09.jpg" alt="" />
            <div className="info">
              <h3>5 Beautiful buildings you need to before dying</h3>
              <p style={{ fontSize: "1rem" }}>12 Jan, 2016</p>
            </div>
          </div>
          <div className="postCard">
            <img src="/image/blog_square_09.jpg" alt="" />
            <div className="info">
              <h3>5 Beautiful buildings you need to before dying</h3>
              <p style={{ fontSize: "1rem" }}>12 Jan, 2016</p>
            </div>
          </div>
          <div className="postCard">
            <img src="/image/blog_square_09.jpg" alt="" />
            <div className="info">
              <h3>5 Beautiful buildings you need to before dying</h3>
              <p style={{ fontSize: "1rem" }}>12 Jan, 2016</p>
            </div>
          </div>
        </div>
        <div className="RecentPost catagoriesPost">
          <h2>Popular catagories</h2>
          <ul>
            <li style={{ fontWeight: "400" }}>
              <a href="">
                Fashion <span>(21)</span>
              </a>
            </li>
            <li style={{ fontWeight: "400" }}>
              <a href="">
                LifeStyle <span>(15)</span>
              </a>
            </li>
            <li style={{ fontWeight: "400" }}>
              <a href="">
                Art & Design <span>(31)</span>
              </a>
            </li>
            <li style={{ fontWeight: "400" }}>
              <a href="">
                Health & Beauty <span>(22)</span>
              </a>
            </li>
            <li style={{ fontWeight: "400" }}>
              <a href="">
                Clothing <span>(66)</span>
              </a>
            </li>
            <li style={{ fontWeight: "400" }}>
              <a href="">
                Entertainment <span>(11)</span>
              </a>
            </li>
            <li style={{ fontWeight: "400" }}>
              <a href="">
                Food & Drink <span>(87)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="newsletter">
        <img src="/image/logo.png" alt="" />
        <p style={{ fontSize: "1rem" }}>
          Cloapedia is a personal blog for handcrafted, cameramade photography
          content, fashion styles from independent creatives around the world.
        </p>
        <p>
          <FaFacebookF />
          <FaPinterest />
          <FaTwitter />
          <FaInstagram />
          <FaGooglePlusG />
        </p>
        <div className="inputEmail">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email address"
          />
          <div className="suscribe">
            Subsribe <BiMessageAltCheck />{" "}
          </div>
        </div>
        <p style={{ marginTop: "30px", fontSize: "1rem" }}>
          © Cloapedia. Design: HTML Design.
        </p>
      </div>
    </div>
  );
}

export default Footer;
