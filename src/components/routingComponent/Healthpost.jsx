import React from "react";

function Healthpost({ tag, imageSrc, title, author, date }) {
  return (
    <div style={{ width: "30%" }}>
      <div
        className="card"
        style={{ width: "100%", border: "none", borderRadius: "0px" }}
      >
        <img src={imageSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5
            style={{
              fontSize: "12px",
              color: "#fff",
              background: "purple",
              width: "70px",
              padding: "5px 10px",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            {tag}
          </h5>
          <h5
            className="card-title"
            style={{ fontSize: "20px", fontWeight: "700" }}
          >
            {" "}
            {title}
          </h5>
          <p style={{ fontSize: "11px", color: "#a3a5a8", fontWeight: "700" }}>
            {" "}
            BY: {author} / {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Healthpost;
