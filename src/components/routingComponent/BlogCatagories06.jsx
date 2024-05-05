import React from "react";
import NavBar from "../navbars/NavBar";
import Footer from "../footer/Footer";
import AuthorBar from "./AuthorBar";
import Healthpost from "./Healthpost";

function BlogCatagories06() {
  const name = "Health";
  const title = "Health";
  const imageSrc = "image/blog_07.jpg";
  const healthData = [
    {
      tag: "Spa",
      title: "What is your favorite leather color",
      author: "JESSICA",
      date: "21 JULY 2017",
    },
    {
      tag: "Beauty",
      title: "This year green glasses trend",
      author: "JENNY",
      date: "19 JULY 2017",
    },
    {
      tag: "Spa",
      title: "Put on a hat for a better look",
      author: "AMANDA",
      date: "18 JULY 2017",
    },
    {
      tag: "Beauty",
      title: "We have been talking about one of the pioneers of male fashion",
      author: "JESSICA",
      date: "16 JULY 2017",
    },
    {
      tag: "Spa",
      title: "Things to watch out for when choosing sunglasses",
      author: "JENNY",
      date: "14 JULY 2017",
    },
    {
      tag: "Beauty",
      title: "A makeup made with honey and wax for your body",
      author: "AMANDA",
      date: "13 JULY 2017",
    },
    {
      tag: "Spa",
      title: "Fabulous treatment methods of nature",
      author: "MARTINES",
      date: "12 JULY 2017",
    },
    {
      tag: "Beauty",
      title: "Shake your soap and candle-smelling body",
      author: "AMANDA",
      date: "11 JULY 2017",
    },
    {
      tag: "Spa",
      title: "Experience a unique experience in candlelight",
      author: "aMANDA",
      date: "11 JULY 2017",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <NavBar />
      <AuthorBar title={title} name={name} />
      <div
        className="health"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          gap: "10px",
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        {healthData.map((data) => (
          <Healthpost
            tag={data.tag}
            title={data.title}
            author={data.author}
            date={data.date}
            imageSrc={imageSrc}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default BlogCatagories06;
