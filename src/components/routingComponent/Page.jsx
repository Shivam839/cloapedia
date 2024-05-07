import React from "react";
import NavBar from "../navbars/NavBar.jsx";
import Footer from "../footer/Footer.jsx";
import PageBar from "./PageBar.jsx";
import SideBar from "./SideBar.jsx";
import "./Page.css";

function Page() {
  const title = "Page Standards";
  const list = ["Page"];
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
          height: "2200px",
        }}
      >
        <div
          className="firstSlide"
          style={{
            display: "flex",
            width: "59%",
            alignItems: "center",
            flexDirection: "column",
            padding: "0 100px",
          }}
        >
          <div className="pagePost">
            <p>
              In lobortis pharetra mattis. Morbi nec nibh iaculis, bibendum
              augue a, ultrices nulla. Nunc velit ante, lacinia id tincidunt
              eget, faucibus nec nisl. In mauris purus, bibendum et gravida
              dignissim, venenatis commodo lacus. Duis consectetur quis nisi nec
              accumsan. Pellentesque enim velit, ut tempor turpis. Mauris felis
              neque, egestas in lobortis et,iaculis at nunc ac, rhoncus sagittis
              ipsum.
            </p>
            <h2>
              Maecenas non convallis quam, eu sodales justo. Pellentesque quis
              lectus elit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </h2>
            <p>
              Donec nec metus sed leo sollicitudin ornare sed consequat neque.
              Aliquam iaculis neque quis dui venenatis, eget posuere felis
              viverra. Ut sit amet feugiat elit, nec elementum velit. Sed eu
              nisl convallis, efficitur turpis eu, euismod nunc. Proin neque
              enim, malesuada non lobortis nec, facilisis et lectus. Ie
              consectetur. Nam eget neque ac ex fringilla dignissim eu ac est.
              Nunc et nisl vel odio posuere.
            </p>

            <img src="/image/blog_09.jpg" alt="" />
            <h2>
              Nam non velit est. Sed lobortis arcu vitae nunc molestie
              consectetur. Nam eget neque ac ex fringilla dignissim eu ac est.
              Nunc et nisl vel odio posuere.
            </h2>
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
            <ul>
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
            <div className="pagePost postPage1">
              <img
                src="/image/blog_01.jpg"
                alt=""
                style={{
                  width: "50%",
                  display: "inline-flex",
                  height: "504px",
                }}
              />
              <div className="pagePost postPage2">
                <p>
                  Proin ultricies nulla consectetur, sollicitudin dolor at,
                  sollicitudin mauris. Maecenas at nunc nunc. Ut nulla felis,
                  tincidunt et porttitor at, rutrum in dolor. Aenean id
                  tincidunt ligula. Donec vitae placerat odio. Mauris accumsan
                  nibh ut nunc maximus, ac auctor elit vehicula. Cras leo sem,
                  vehicula a ultricies ac, condimentum vitae lectus. Sed ut eros
                  euismod, luctus nisl eu, congue odio.
                </p>
                <h2>
                  Nam non velit est. Sed lobortis arcu vitae nunc molestie
                  consectetur. Nam eget neque ac ex fringilla dignissim eu ac
                  est. Nunc et nisl vel odio posuere.
                </h2>
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

export default Page;
