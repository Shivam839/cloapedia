// PageBar.jsx
import React from "react";
import "./PageBar.css";
import { Link } from "react-router-dom";

function PageBar({ title, list }) {
  return (
    <div className="page">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {list.map((data, index) => (
          <li key={index}>
            {" "}
            <Link to={`/${data}`}>{data}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PageBar;
