import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbars/NavBar";
import Footer from "./components/footer/Footer";
import Bodysection from "./components/bodySection/Bodysection";
import BlogAuthor from "./components/routingComponent/BlogAuthor";
import BlogCatagories01 from "./components/routingComponent/BlogCatagories01";
import BlogCatagories02 from "./components/routingComponent/BlogCatagories02";
import BlogCatagories03 from "./components/routingComponent/BlogCatagories03";

function App() {
  return (
    <div className="appdiv">
      {/* <NavBar /> */}
      {/* <Bodysection /> */}
      {/* <Footer /> */}
      {/* <BlogAuthor /> */}
      {/* <BlogCatagories01 /> */}
      {/* <BlogCatagories02 /> */}
      <BlogCatagories03 />
    </div>
  );
}

export default App;
