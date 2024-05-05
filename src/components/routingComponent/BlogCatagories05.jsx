import React from "react";
import NavBar from "../navbars/NavBar";
import Footer from "../footer/Footer";
import AuthorBar from "./AuthorBar";
import SideBar from "./SideBar";
import Vlogpost from "./Vlogpost";

function BlogCatagories05() {
  const title = "VLogs";
  const name = "Vlogs";
  const vlogData = [
    {
      imageSrc: "https://www.youtube.com/embed/0aWvkw8Wqps?si=SpkFkRjWajfmks2_",
      title: "How To Vlog | How To Be A Vlogger!",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "24 JULY, 2017",
      author: "ASHLEY NICHOLE",
    },
    {
      imageSrc: "https://www.youtube.com/embed/VgSLgKJuIbk?si=3l7JsuyERkegrsfU",
      title: "DIY Room Decor | Chic & Easy!",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "23 JULY, 2017",
      author: "ASHLEY NICHOLE",
    },
    {
      imageSrc: "https://www.youtube.com/embed/wdklWLsXOXs?si=LAYi2_SnXT3YDo78",
      title: "Huge Summer Try On Haul | Urban Outfitters, Asos, Target",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "23 JULY, 2017",
      author: "ASHLEY NICHOLE",
    },
    {
      imageSrc: "https://www.youtube.com/embed/wdklWLsXOXs?si=zN04TEMmcVkdvjeQ",
      title: "What's In My Carry On | Travel Tips + Essentials!",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "21 JULY, 2017",
      author: "ASHLEY NICHOLE",
    },
  ];

  return (
    <div style={{ overflowX: "hidden" }}>
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

          justifyItems: "center",
        }}
      >
        <div
          className="firstSlide"
          style={{
            display: "flex",
            width: "70%",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {vlogData.map((data) => (
            <Vlogpost
              imageSrc={data.imageSrc}
              title={data.title}
              description={data.description}
              name={data.name}
              date={data.date}
              author={data.author}
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

export default BlogCatagories05;
