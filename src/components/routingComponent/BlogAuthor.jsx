import React from "react";
import NavBar from "../navbars/NavBar";
import Footer from "../footer/Footer";
import AuthorBar from "./AuthorBar";
import AboutAuthor from "./AboutAuthor";
import AuthorPost from "./AuthorPost";
import SideBar from "./SideBar";

function BlogAuthor() {
  const imageSrc = "/image/blog_07.jpg";
  const name = "Jessica";
  const title = `Author by ${name}`;
  const data = [
    {
      title: "Your visit to China will be good for your soul",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enimcerat elicerat eli nibh, maximus ac felis nec, maximus tempor odio.",
      menu: "LIFESTYLE",
      date: "24 JULY, 2017",
      name: name,
      view: 2291,
    },
    {
      title: "Stay alone with nature to rest your soul",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enimcerat elicerat eli nibh, maximus ac felis nec, maximus tempor odio.",
      menu: "LIFESTYLE",
      date: "24 JULY, 2017",
      name: name,
      view: 2291,
    },
    {
      title: "Sea waves and endless happiness",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enimcerat elicerat eli nibh, maximus ac felis nec, maximus tempor odio.",
      menu: "LIFESTYLE",
      date: "24 JULY, 2017",
      name: name,
      view: 2291,
    },
    {
      title: "How to spend a romantic holiday with your girlfriend?",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enimcerat elicerat eli nibh, maximus ac felis nec, maximus tempor odio.",
      menu: "LIFESTYLE",
      date: "24 JULY, 2017",
      name: name,
      view: 2291,
    },
  ];
  return (
    <div>
      <NavBar />
      <AuthorBar name={name} title={title} />
      <div
        className="mainpage"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          className="firstSlide"
          style={{
            display: "flex",
            width: "50%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          {" "}
          <AboutAuthor name={name} />
          {data.map((item) => (
            <AuthorPost
              key={item.title} // Remember to add a unique key for each item in the list
              imageSrc={imageSrc}
              title={item.title}
              description={item.description}
              categories={item.menu}
              date={item.date}
              name={item.name.toUpperCase()}
              view={item.view}
            />
          ))}
        </div>
        <div
          className="secondSlide"
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
      </div>

      <Footer />
    </div>
  );
}

export default BlogAuthor;
