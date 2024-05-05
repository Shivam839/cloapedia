import React from "react";

function TravelPost({ imageSrc, title, name, description, date, author }) {
  return (
    <div style={{ width: "45%", height: "550px" }}>
      <div
        className="card"
        style={{ width: "100%", border: "none", borderRadius: "0px" }}
      >
        <img src={imageSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontSize: "21px", fontWeight: "700" }}
          >
            {title}
          </h5>
          <p className="card-text">{description}</p>
          <p style={{ fontSize: "11px", fontWeight: "700" }}>
            {name} / {date} / BY {author}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TravelPost;
