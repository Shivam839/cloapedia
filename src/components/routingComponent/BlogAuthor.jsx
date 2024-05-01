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
      <AboutAuthor name={name} />
      <Footer />
    </div>
  );
}

export default BlogAuthor;
