import React from "react";
import NavBar from "../navbars/NavBar";
import Footer from "../footer/Footer";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import "./Single.css";
import AboutAuthor from "../routingComponent/AboutAuthor";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import Comments from "./Comments";
import { IoMailOpenOutline } from "react-icons/io5";

function Single() {
  const commentData = [
    {
      name: "Amanda Martines",
      description:
        "Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean.",
    },
    {
      name: "Baltej Singh",
      description:
        "Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean.",
    },
    {
      name: "Marie Johnson",
      description:
        "Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean.",
    },
  ];
  const n = commentData.length;
  const name = "Jessica";
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <hr />
      <div
        className="mainpage blogcat"
        style={{
          display: "flex",
          width: "100%",
          //   alignItems: "center",
          justifyContent: "space-around",
          padding: "0 50px",
          height: "auto",
        }}
      >
        <div
          className="firstSlide"
          style={{
            display: "flex",
            width: "65%",
            alignItems: "center",
            flexDirection: "column",
            padding: "0 10px 0 100px",
          }}
        >
          <div className="singleSection">
            <ul>
              <li>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#a3a5a8" }}
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "#a3a5a8" }}
                >
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li>The golden rules you need to know for a positive life</li>
            </ul>
            <Link to="/lifestyle" style={{ textDecoration: "none" }}>
              <h4>Lifestyle</h4>
            </Link>
            <h2>The golden rules you need to know for a positive life</h2>
            <ul>
              <li>21 july 2017</li>
              <li>/</li>
              <li>By Jessica</li>
              <li>/</li>
              <li>2324</li>
            </ul>
            <div className="sharebutton">
              <button
                style={{
                  background: "#3b5998",
                }}
              >
                <FaFacebookF /> Share on Facebook
              </button>
              <button
                style={{
                  background: "#00b6f1",
                }}
              >
                <FaTwitter /> Tweet on twitter
              </button>
              <button
                style={{
                  background: "#da5333",
                }}
              >
                <FaGooglePlusG />
              </button>
            </div>
            <img src="/image/blog_07.jpg" alt="" />
            <p>
              In lobortis pharetra mattis. Morbi nec nibh iaculis, bibendum
              augue a, ultrices nulla. Nunc velit ante, lacinia id tincidunt
              eget, faucibus nec nisl. In mauris purus, bibendum et gravida
              dignissim, venenatis commodo lacus. Duis consectetur quis nisi nec
              accumsan. Pellentesque enim velit, ut tempor turpis. Mauris felis
              neque, egestas in lobortis et,iaculis at nunc ac, rhoncus sagittis
              ipsum.
            </p>
            <h3>
              Maecenas non convallis quam, eu sodales justo. Pellentesque quis
              lectus elit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </h3>
            <p>
              Donec nec metus sed leo sollicitudin ornare sed consequat neque.
              Aliquam iaculis neque quis dui venenatis, eget posuere felis
              viverra. Ut sit amet feugiat elit, nec elementum velit. Sed eu
              nisl convallis, efficitur turpis eu, euismod nunc. Proin neque
              enim, malesuada non lobortis nec, facilisis et lectus. Ie
              consectetur. Nam eget neque ac ex fringilla dignissim eu ac est.
              Nunc et nisl vel odio posuere.
            </p>
            <p>
              Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet
              est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit,
              suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus
              neque sodales nulla finibus volutpat. Integer pulvinar massa vitae
              ultrices posuere. Proin ut tempor turpis. Mauris felis neque,
              egestas in lobortis et, sodales non ante. Ut vestibulum libero
              quis luctus tempus. Nullam eget dignissim massa. Vivamus id
              condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl
              massa nunc.
            </p>
            <img src="/image/blog_07.jpg" alt="" />
            <h3>
              Nam non velit est. Sed lobortis arcu vitae nunc molestie
              consectetur. Nam eget neque ac ex fringilla dignissim eu ac est.
              Nunc et nisl vel odio posuere.
            </h3>
            <p>
              Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet
              est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit,
              suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus
              neque sodales nulla finibus volutpat. Integer pulvinar massa vitae
              ultrices posuere. Proin ut tempor turpis. Mauris felis neque,
              egestas in lobortis et, sodales non ante. Ut vestibulum libero
              quis luctus tempus. Nullam eget dignissim massa. Vivamus id
              condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl
              massa nunc.
            </p>
            <p>
              Morbi pharetra porta consequat. Aenean et diam sapien. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Pellentesque
              dictum ligula iaculis, feugiat metus eu, sollicitudin ex. Quisque
              eu ullamcorper ligula. In vel ex ac purus finibus viverra.
              Maecenas pretium lobortis turpis. Fusce lacinia nisi in tortor
              massa nunc.
            </p>
            <ul
              className="seccondList"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <li>&gt; Integer sit amet odio ac lectus imperdiet elementum.</li>
              <li>&gt; Praesent vitae lacus sed lacus ullamcorper mollis.</li>
              <li>
                &gt; Donec vitae metus ac felis vulputate tincidunt non et ex.
              </li>
              <li>&gt; In dapibus sapien at viverra venenatis.</li>
              <li>&gt; Pellentesque mollis velit id maximus finibus.</li>
            </ul>
            <p>
              Proin ultricies nulla consectetur, sollicitudin dolor at,
              sollicitudin mauris. Maecenas at nunc nunc. Ut nulla felis,
              tincidunt et porttitor at, rutrum in dolor. Aenean id tincidunt
              ligula. Donec vitae placerat odio. Mauris accumsan nibh ut nunc
              maximus, ac auctor elit vehicula. Cras leo sem, vehicula a
              ultricies ac, condimentum vitae lectus. Sed ut eros euismod,
              luctus nisl eu, congue odio.
            </p>

            <div
              className="SingleSection1"
              style={{ display: "flex", width: "100%", gap: "10px" }}
            >
              <img
                src="/image/blog_01.jpg"
                alt=""
                style={{
                  width: "48%",
                  display: "inline-flex",
                  height: "504px",
                }}
              />
              <div className="SingleSection_1a">
                <p>
                  Proin ultricies nulla consectetur, sollicitudin dolor at,
                  sollicitudin mauris. Maecenas at nunc nunc. Ut nulla felis,
                  tincidunt et porttitor at, rutrum in dolor. Aenean id
                  tincidunt ligula. Donec vitae placerat odio. Mauris accumsan
                  nibh ut nunc maximus, ac auctor elit vehicula. Cras leo sem,
                  vehicula a ultricies ac, condimentum vitae lectus. Sed ut eros
                  euismod, luctus nisl eu, congue odio.
                </p>
                <h3>
                  Nam non velit est. Sed lobortis arcu vitae nunc molestie
                  consectetur. Nam eget neque ac ex fringilla dignissim eu ac
                  est. Nunc et nisl vel odio posuere.
                </h3>
                <p>
                  Aliquam eget maximus odio. Aliquam varius nisl ut leo
                  fermentum, id fringilla magna tempus. Curabitur quis bibendum
                  lorem, ut suscipit tellus. Morbi id dictum justo, et massa
                  nunc. Mauris laoreet, neque et varius malesuada, justo neque
                  consequat dolor, sit amet semper dui ligula commodo enim. Duis
                  mauris magna, euismod in ante sed, laoreet faucibus elit. Nam
                  euismod vulputate lorem, nec tincidunt lacus volutpat sit
                  amet. In libero eros, dignissim vitae quam sed, maximus
                  consectetur justo. Donec id orci eget odio convallis
                  pellentesque. Quisque mi ex, pretium in eros at, viverra
                  imperdiet magna. Donec eu arcu vitae erat consectetur pretium.
                  Proin varius massa justo, quis aliquet urna cras amet.
                </p>
              </div>
            </div>
            <p>
              Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet
              est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit,
              suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus
              neque sodales nulla finibus volutpat. Integer pulvinar massa vitae
              ultrices posuere. Proin ut tempor turpis. Mauris felis neque,
              egestas in lobortis et, sodales non ante. Ut vestibulum libero
              quis luctus tempus. Nullam eget dignissim massa. Vivamus id
              condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl
              massa nunc.
            </p>
            <div className="tagname" style={{ marginTop: "20px" }}>
              <Link to="/lifestyle" style={{ textDecoration: "none" }}>
                <h4 style={{ background: "#3197d6" }}>Tag</h4>
              </Link>
              <ul
                className="third"
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <li>Lifestyle</li>
                <li>Colorful</li>
                <li>Trading </li>
                <li>Another tag</li>
              </ul>
            </div>
            <div className="sharebutton">
              <button
                style={{
                  background: "#3b5998",
                }}
              >
                <FaFacebookF /> Share on Facebook
              </button>
              <button
                style={{
                  background: "#00b6f1",
                }}
              >
                <FaTwitter /> Tweet on twitter
              </button>
              <button
                style={{
                  background: "#da5333",
                }}
              >
                <FaGooglePlusG />
              </button>
            </div>
            <img src="/image/banner_01.jpg" alt="" />
            <div className="singlepost">
              <div
                className="postCard"
                style={{
                  flexDirection: "row-reverse",
                }}
              >
                <img src="/image/blog_square_09.jpg" alt="" />
                <div className="info" style={{ textAlign: "end" }}>
                  <h3>5 Beautiful buildings you need to before dying</h3>
                  <p>Prev</p>
                </div>
              </div>
              <div className="postCard">
                <img src="/image/blog_square_09.jpg" alt="" />
                <div className="info">
                  <h3>5 Beautiful buildings you need to before dying</h3>
                  <p>Next</p>
                </div>
              </div>
            </div>
            <AboutAuthor name={name} />

            <div className="likePost">
              <h3>You may also like</h3>
              <div className="postsInLikePost">
                <div
                  className="card"
                  style={{ width: "45%", border: "none", borderRadius: "0px" }}
                >
                  <img
                    src="/image/blog_08.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body ">
                    <h5 className="card-title mt-0">
                      We are guests of ABC Design Studio
                    </h5>
                    <p className="card-text">TRENDS / 21 JULY 2017</p>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ width: "45%", border: "none", borderRadius: "0px" }}
                >
                  <img
                    src="/image/blog_08.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Nostalgia at work with family
                    </h5>
                    <p className="card-text">NEWS / 20 JULY 2017</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="commentSection">
              <h3> {n} Comments</h3>
              {commentData.map((data) => (
                <Comments name={data.name} description={data.description} />
              ))}
            </div>
            <div className="contactForm">
              <h3>Leave A Reply</h3>
              <input type="text" name="" id="" placeholder="Your name" />
              <input type="text" name="" id="" placeholder="Email Adress" />
              <input type="text" name="" id="" placeholder="Website" />
              <input type="text" name="" id="" placeholder="Your Content" />
              <button
                className="btn btn-dark"
                style={{
                  width: "150px",
                  borderRadius: "0px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  marginTop: "20px",
                }}
              >
                Submit Comment
              </button>
            </div>
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

export default Single;
