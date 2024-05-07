import React from "react";
import NavBar from "../navbars/NavBar";
import Footer from "../footer/Footer";
import SideBar from "./SideBar";
import PageBar from "./PageBar";
import "./PageContact.css";
import { IoMailOpenOutline } from "react-icons/io5";

function PageContact() {
  const title = "Contact Us";
  const list = ["Page", "Contact"];
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <PageBar title={title} list={list} />
      <div
        className="mainpage blogcat"
        style={{
          display: "flex",
          width: "100%",
          //   alignItems: "center",
          justifyContent: "space-around",
          padding: "0 50px",
          height: "1500px",
          justifyItems: "center",
        }}
      >
        <div
          className="firstSlide"
          style={{
            display: "flex",
            width: "70%",
            // alignItems: "center",
            flexDirection: "column",
            padding: "0 100px",
          }}
        >
          <div className="contactSection1">
            <div className="contactsection_1_a ">
              <h4>Who we are</h4>
              <p>
                Cloapedia is a personal blog for handcrafted, cameramade
                photography content, fashion styles from independent creatives
                around the world.
              </p>
            </div>
            <div className=" contactsection_1_a contactsection_1_b">
              <h4>How we help?</h4>
              <p>
                If you’d like to write for us, advertise with us or just say
                hello, fill out the form below and we’ll get back to you as soon
                as possible.
              </p>
            </div>
          </div>
          <div className="contactSection2">
            <p>
              Please read Licensing & Terms of Use if you are wondering about
              the license.
            </p>
          </div>
          <div className="contactForm">
            <h4>Contact Form</h4>
            <input type="text" name="" id="" placeholder="Your name" />
            <input type="text" name="" id="" placeholder="Your Email" />
            <input type="text" name="" id="" placeholder="Phone" />
            <input type="text" name="" id="" placeholder="Subject" />
            <input type="text" name="" id="" placeholder="Your Message" />
            <button
              className="btn btn-dark"
              style={{
                width: "130px",
                borderRadius: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: "20px",
              }}
            >
              Send <IoMailOpenOutline />
            </button>
          </div>
        </div>

        <div
          className="secondSlide"
          style={{
            display: "flex",
            width: "25%",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <SideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageContact;
