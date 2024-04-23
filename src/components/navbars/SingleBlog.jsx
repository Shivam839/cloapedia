import React from "react";

function SingleBlog() {
  let a = "Single";

  return (
    <div className="singleBlog">
      <ul>
        <li>{a} Default</li>
        <li>{a} Full Width</li>
        <li>{a} Gallery</li>
        <li>{a} Video</li>
        <li>{a} Audio</li>
        <li>{a} No Media</li>
      </ul>
    </div>
  );
}

export default SingleBlog;
