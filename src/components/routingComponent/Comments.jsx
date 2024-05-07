import React from "react";

function Comments({ name, description }) {
  return (
    <div style={{ width: "100%", display: "flex", gap: "20px" }}>
      <img
        src="/image/author.jpg"
        alt=""
        style={{ width: "80px", height: "80px", borderRadius: "50%" }}
      />
      <div
        className="commentsinfo"
        style={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div
          className="heading"
          style={{
            padding: "0",
            margin: "0",
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <h5
            style={{
              margin: "0",
              padding: "0",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {name}
          </h5>
          <p style={{ fontSize: "11px" }}>5 DAYS AGO</p>
        </div>
        <p
          style={{
            margin: "0",
            padding: "5px",
            fontSize: "15px",
            color: "#5e5e5e",
          }}
        >
          {description}
        </p>
        <button
          className="btn btn-dark"
          style={{ borderRadius: "0px", width: "65px", lineHeight: "0.7" }}
        >
          Reply
        </button>
      </div>
    </div>
  );
}

export default Comments;
