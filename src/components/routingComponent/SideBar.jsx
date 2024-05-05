import React from "react";
import "./SideBar.css";
import { FaSearch } from "react-icons/fa";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="widjet" id="widjet-1">
        <h2>Search</h2>
        <div className="searchBar">
          <input type="text" name="" id="" placeholder="Seacrh on this site" />
          <div className="btn">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="widjet" id="widjet-2">
        <div className="RecentPost recentPost">
          <h2>Recent Post</h2>
          <div className="postCard">
            <img src="/image/blog_square_09.jpg" alt="" />
            <div className="info">
              <h3>5 Beautiful buildings you need to before dying</h3>
              <p>12 Jan, 2016</p>
            </div>
          </div>
          <div className="postCard">
            <img src="/image/blog_square_09.jpg" alt="" />
            <div className="info">
              <h3>5 Beautiful buildings you need to before dying</h3>
              <p>12 Jan, 2016</p>
            </div>
          </div>
          <div className="postCard">
            <img src="/image/blog_square_09.jpg" alt="" />
            <div className="info">
              <h3>5 Beautiful buildings you need to before dying</h3>
              <p>12 Jan, 2016</p>
            </div>
          </div>
        </div>
      </div>
      <div className="widjet" id="widjet-3">
        <h2>Advertising</h2>
        <img src="/image/banner_03.jpg" alt="" width={"250px"} />
      </div>
      <div className="widjet" id="widjet-4">
        <h2>Instagram Feed</h2>
        <div className="imageFeed">
          <img src="/image/insta_01.jpeg" alt="" />
          <img src="/image/insta_01.jpeg" alt="" />
          <img src="/image/insta_01.jpeg" alt="" />
          <img src="/image/insta_01.jpeg" alt="" />
          <img src="/image/insta_01.jpeg" alt="" />
          <img src="/image/insta_01.jpeg" alt="" />
          <img src="/image/insta_01.jpeg" alt="" />
          <img src="/image/insta_01.jpeg" alt="" />
          <img src="/image/insta_01.jpeg" alt="" />
        </div>
      </div>
      <div className="widjet" id="widjet-5">
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
    </div>
  );
}

export default SideBar;
