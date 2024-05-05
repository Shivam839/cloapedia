import React from "react";
import NavBar from "../navbars/NavBar";
import AuthorBar from "./AuthorBar";
import Footer from "../footer/Footer";
import SideBar from "./SideBar";
import AuthorPost from "./AuthorPost";

function BlogCatagories03() {
  const imageSrc = "/image/blog_07.jpg";

  const title = "Lifestyle";
  const name = "Lifestyle";
  const data = [
    {
      title: "The golden rules you need to know for a positive life",
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
      title: "Extend your feet and enjoy the nature",
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
      <AuthorBar title={title} name={name} />
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
            width: "59%",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
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

export default BlogCatagories03;
