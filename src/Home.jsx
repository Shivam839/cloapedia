import React from "react";
import NavBar from "./components/navbars/NavBar";
import Bodysection from "./components/bodySection/Bodysection";
import Footer from "./components/footer/Footer";

function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <NavBar />
      <Bodysection />
      <Footer />
    </div>
  );
}

export default Home;
