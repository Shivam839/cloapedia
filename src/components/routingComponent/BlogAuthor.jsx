import React from "react";
import NavBar from "../navbars/NavBar";
import Footer from "../footer/Footer";
import AuthorBar from "./AuthorBar";
import AboutAuthor from "./AboutAuthor";

function BlogAuthor() {
  const name = "Jessica";
  return (
    <div>
      <NavBar />
      <AuthorBar name={name} />
      <div
        className="mainpage"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          className="firstSlide"
          style={{
            display: "flex",
            width: "50%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          {" "}
          <AboutAuthor name={name} />
        </div>
        <div
          className="secondSlide"
          style={{
            display: "flex",
            width: "20%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        ></div>
      </div>

      <Footer />
    </div>
  );
}

export default BlogAuthor;
