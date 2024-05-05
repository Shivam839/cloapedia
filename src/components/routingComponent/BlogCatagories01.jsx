import React from "react";
import NavBar from "../navbars/NavBar";
import Footer from "../footer/Footer";
import AuthorBar from "./AuthorBar";
import SideBar from "./SideBar";
import Advertisement from "../bodySection/Advertisement";
import FashionPost from "./FashionPost";

function BlogCatagories01() {
  const title = "Fashion";
  const image1 = "/image/blog_01.jpg";
  const image2 = "/image/author_01.jpg";
  const fashionPostData = [
    {
      imageSrc: image1,
      title: title,
      description: "What is your favorite leather jacket color",
      name: "JESSICA",
      date: "21 July 2017",
    },
    {
      imageSrc: image2,
      title: title,
      description: "This year green glasses trend",
      name: "JENNY",
      date: "19 July 2017",
    },
    {
      imageSrc: image1,
      title: title,
      description:
        "We have been talking about one of the pioneers of male fashion",
      name: "JESSICA",
      date: "16 July 2017",
    },
    {
      imageSrc: image1,
      title: title,
      description: "Put on a hat for a better look",
      name: "AMANDA",
      date: "18 July 2017",
    },
    {
      imageSrc: image2,
      title: title,
      description: "Gorgeous collection for stylish ladies",
      name: "AMANDA",
      date: "13 July 2017",
    },
    {
      imageSrc: image2,
      title: title,
      description: "Things to watch out for when choosing sunglasses",
      name: "JENNY",
      date: "14 July 2017",
    },
    {
      imageSrc: image2,
      title: title,
      description: "Pink and Brown Great Harmony",
      name: "AMANDA",
      date: "11 July 2017",
    },
    {
      imageSrc: image1,
      title: title,
      description: "Grab a summer with a cup of coffee",
      name: "MARTINS",
      date: "12 July 2017",
    },
  ];
  const name = title;
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <AuthorBar title={title} name={name} />
      <div
        className="mainpage blogcat"
        style={{
          display: "flex",
          width: "100%",
          //   alignItems: "center",
          justifyContent: "space-around",
          padding: "0 50px",
        }}
      >
        <div
          className="firstSlide"
          style={{
            display: "flex",
            width: "25%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <SideBar />
        </div>
        <div
          className="secondSlide"
          style={{
            display: "flex",
            width: "70%",
            alignItems: "center",
            // justifyContent: "space-between",
            flexDirection: "column",
            // height: "3122px",
          }}
        >
          <Advertisement />
          <div
            className="FashionPost"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between", // Align items with equal space between them
              gap: "10px", // Add gap between items
            }}
          >
            <div
              className="post"
              id="post-1"
              style={{ width: "48%", display: "flex", flexDirection: "column" }}
            >
              {fashionPostData.map((data, i) => {
                if (i % 2 !== 0) {
                  return (
                    <FashionPost
                      key={data.date}
                      title={data.title}
                      imageSrc={data.imageSrc}
                      description={data.description}
                      name={data.name}
                      date={data.date}
                    />
                  );
                }
              })}
            </div>
            <div
              className="post"
              id="post-2"
              style={{ width: "48%", display: "flex", flexDirection: "column" }}
            >
              {fashionPostData.map((data, i) => {
                if (i % 2 === 0) {
                  return (
                    <FashionPost
                      key={data.date}
                      title={data.title}
                      imageSrc={data.imageSrc}
                      description={data.description}
                      name={data.name}
                      date={data.date}
                    />
                  );
                }
              })}
            </div>
          </div>
          ;
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogCatagories01;
