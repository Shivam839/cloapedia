import React from "react";
import "./FoodBlog.css";

function FoodBlog({ title, imageSrc, description, name, author, date }) {
  return (
    <div>
      <div className="travel">
        <div className="travelPost">
          <div className="bgImage">
            <img src={imageSrc} alt="" style={{ width: "100%" }} />
          </div>
          <div className="infotravel">
            <h2
              style={{
                fontSize: "1.5rem",
                background: "white",
                fontWeight: "700",
              }}
            >
              {title}
            </h2>
            <p style={{ fontSize: "15px" }}>{description}</p>
            <p style={{ fontSize: "11px" }}>
              {name} / {date} / BY {author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodBlog;
