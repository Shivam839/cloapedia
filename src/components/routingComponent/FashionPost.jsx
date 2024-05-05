import React from "react";

function FashionPost({ title, date, name, description, imageSrc }) {
  return (
    <div
      className="card"
      style={{
        width: "100%", // Adjust width to account for gap between items
        border: "none",
        margin: "0",
        padding: "0",
      }}
    >
      <img
        src={imageSrc}
        className="card-img-top"
        alt="..."
        style={{ width: "95%" }}
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            fontSize: "12px",
            fontWeight: "500",
            background: "magenta",
            padding: "0.2rem 1rem",
            lineHeight: "1",
            color: "#fff",
            width: "80px",
            opacity: "0.3",
          }}
        >
          {title}
        </h5>
        <p
          className="card-text"
          style={{ fontSize: "20px", fontWeight: "700" }}
        >
          {description}
        </p>
        <p style={{ fontSize: "11px", fontWeight: "700", color: "#a3a5a8" }}>
          BY: {name} / {date}{" "}
        </p>
      </div>
    </div>
  );
}

export default FashionPost;
