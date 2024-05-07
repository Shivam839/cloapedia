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
import Page from "./components/routingComponent/Page";
import Page404 from "./components/routingComponent/Page404";
import PageContact from "./components/routingComponent/PageContact";
import Single from "./components/routingComponent/Single";
import BlogAuthor from "./components/routingComponent/BlogAuthor";

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
        <Route path="/Page" element={<Page />} />
        <Route path="/Page404" element={<Page404 />} />
        <Route path="/Not Found" element={<Page404 />} />
        <Route path="/Contact" element={<PageContact />} />
        <Route path="/Single" element={<Single />} />
        <Route path="/BlogAuthor" element={<BlogAuthor />} />
      </Routes>
    </Router>
  );
}

export default App;
