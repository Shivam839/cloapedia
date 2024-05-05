import { useState } from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogCatagories01 from "./components/routingComponent/BlogCatagories01";
import BlogCatagories02 from "./components/routingComponent/BlogCatagories02";
import BlogCatagories03 from "./components/routingComponent/BlogCatagories03";
import BlogCatagories04 from "./components/routingComponent/BlogCatagories04";
import BlogCatagories05 from "./components/routingComponent/BlogCatagories05";
import BlogCatagories06 from "./components/routingComponent/BlogCatagories06";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/fashion" element={<BlogCatagories01 />} />
        <Route path="/food" element={<BlogCatagories02 />} />
        <Route path="/lifestyle" element={<BlogCatagories03 />} />
        <Route path="/travel" element={<BlogCatagories04 />} />
        <Route path="/vlogs" element={<BlogCatagories05 />} />
        <Route path="/health" element={<BlogCatagories06 />} />
      </Routes>
    </Router>
  );
}

export default App;
