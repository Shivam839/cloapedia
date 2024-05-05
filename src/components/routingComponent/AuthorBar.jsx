import React from "react";
import "./AuthorBar.css";
import { IoPersonCircle } from "react-icons/io5";

function AuthorBar({ name, title }) {
  return (
    <div className="authorbar mt-5 mb-5">
      {/* <h2>{name}</h2> */}
      <div className="author">
        <IoPersonCircle
          style={{
            color: "#ffffff",
            backgroundColor: "#3197d6",
            fontSize: "2em",
            borderRadius: "50%",
          }}
        />
        <h2> {title}</h2>
        <p
          style={{
            fontWeight: "300",
            fontSize: "0.9rem",
            fontFamily: "monospace",
            margin: "0",
          }}
        >
          Nulla felis eros, varius sit amet volutpat non.
        </p>
      </div>
      <div className="menu">
        <a href="#">Home</a>/<a href="#">Blog</a>/<p>{title}</p>
      </div>
    </div>
  );
}

export default AuthorBar;
