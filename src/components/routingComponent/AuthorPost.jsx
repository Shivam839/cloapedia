import React from "react";
import "./AuthorPost.css";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

function AuthorPost({
  imageSrc,
  title,
  description,
  categories,
  date,
  name,
  view,
}) {
  return (
    <div className="authorPost">
      <img src={imageSrc} alt="" />
      <div className="postinfo">
        <div className="btn" style={{ width: "80%", display: "flex" }}>
          <p style={{ width: "40%", background: "#3b5998" }}>
            <FaFacebookF /> Share on facebook
          </p>
          <p style={{ width: "40%", background: "#00b6f1" }}>
            <FaTwitter /> Tweet on twitter
          </p>
          <p style={{ width: "10%", background: "#da5333" }}>
            <FaGooglePlusG />
          </p>
        </div>
        <h2 style={{ fontSize: "28px" }}>{title}</h2>
        <p style={{ fontSize: "15px" }}>{description}</p>
        <p style={{ fontSize: "11px", color: "#111111", fontWeight: "600" }}>
          <a href="#">{categories}</a> / <a href="#">{date}</a> /{" "}
          <a href="#">BY {name}</a> / <a href="#">{view}</a>
        </p>
      </div>
    </div>
  );
}

export default AuthorPost;
