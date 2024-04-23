import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import "./Features.css";
import SingleBlog from "./SingleBlog";
import BlogCat from "./BlogCat";

function Features() {
  const [showSingleBlog, setShowSingleBlog] = useState(false);
  const [showBlogCat, setShowBlogCat] = useState(false);

  const handleBlogClick = () => {
    setShowSingleBlog(!showSingleBlog);
    setShowBlogCat(false);
  };

  const handleBlogCatClick = () => {
    setShowBlogCat(!showBlogCat);
    setShowSingleBlog(false);
  };
  return (
    <>
      <div className="features">
        <ul>
          <li onClick={handleBlogClick}>
            Single Blog <FaAngleRight />
          </li>
          <li onClick={handleBlogCatClick}>
            Blog Catagories <FaAngleRight />
          </li>
          <li>Blog Author</li>
          <li>Contact Page</li>
          <li>Default Page</li>
          <li>Full Width Page</li>
          <li>Not Found Page</li>
          <li>SiteMap and Archives</li>
        </ul>
      </div>
      {showSingleBlog && <SingleBlog />}
      {showBlogCat && <BlogCat />}
    </>
  );
}

export default Features;
