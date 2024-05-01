import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbars/NavBar";
import Footer from "./components/footer/Footer";
import Bodysection from "./components/bodySection/Bodysection";
import BlogAuthor from "./components/routingComponent/BlogAuthor";

function App() {
  return (
    <div className="appdiv">
      {/* <NavBar />
      <Bodysection />
      <Footer /> */}
      <BlogAuthor />
    </div>
  );
}

export default App;
