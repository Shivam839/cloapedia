import React from "react";
import NavBar from "../navbars/NavBar";
import Footer from "../footer/Footer";
import PageBar from "./PageBar";
import { Link } from "react-router-dom";

function Page404() {
  const title = "Not Found";
  const list = ["Page", "Not Found"];
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <PageBar title={title} list={list} />

      <div
        className="page404"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: " 30px 250px",
        }}
      >
        <h1 style={{ fontSize: "140px" }}>404</h1>
        <h2 style={{ fontSize: "40px" }}> Oh no! Page Not Found</h2>
        <p style={{ fontSize: "15px", textAlign: "center" }}>
          The page you are looking for no longer exists. Perhaps you can return
          back to the site's homepage and see if you can find what you are
          looking for. Or, you can try finding it with the information below.
        </p>
        <button className="btn btn-dark" style={{ width: "150px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Back To Home
          </Link>
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Page404;
