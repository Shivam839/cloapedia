import React from "react";

function Vlogpost({ imageSrc, date, name, title, description, author }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <iframe
        width="812"
        height="415"
        src={imageSrc}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h2 style={{ fontSize: "24px", padding: "1rem 0", fontWeight: "700" }}>
        {title}
      </h2>
      <p style={{ fontSize: "15px" }}>{description}</p>
      <p style={{ fontSize: "11px", fontWeight: "700" }}>
        {name} / {date} / By {author}{" "}
      </p>
      <button
        type="button"
        class="btn btn-dark"
        style={{ borderRadius: "none", padding: "10px 20px" }}
      >
        Read More
      </button>
    </div>
  );
}

export default Vlogpost;
