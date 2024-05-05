import React from "react";
import NavBar from "../navbars/NavBar";
import Footer from "../footer/Footer";
import AuthorBar from "./AuthorBar";
import SideBar from "./SideBar";
import Advertisement from "../bodySection/Advertisement";
import TravelPost from "./TravelPost";

function BlogCatagories04() {
  const title = "Travel";
  const name = "Travel";

  const TravelData = [
    {
      imageSrc: "/image/blog_travel_01.jpg",
      title: "We visited the ancient theater in Macedonia",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "24 JULY 2017",
      author: "AMANDA",
    },
    {
      imageSrc: "/image/blog_travel_01.jpg",
      title: "To visit the fairy chimneys and antique cities in Turkey",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "23 JULY 2017",
      author: "JOHN",
    },
    {
      imageSrc: "/image/blog_travel_01.jpg",
      title: "Travel to the oldest city in the world in Mardin",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "22 JULY 2017",
      author: "MARTINES",
    },
    {
      imageSrc: "/image/blog_travel_01.jpg",
      title: "We went to a city made of stone houses",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "21 JULY 2017",
      author: "JESSICA",
    },
    {
      imageSrc: "/image/blog_travel_01.jpg",
      title: "New mosque in Germany and we have video for you",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "20 JULY 2017",
      author: "HELENA",
    },
    {
      imageSrc: "/image/blog_travel_01.jpg",
      title: "A unique beauty from the night view of Istanbul",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "19 JULY 2017",
      author: "MARRY",
    },
    {
      imageSrc: "/image/blog_travel_01.jpg",
      title: "The most beautiful bridge designs ever",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "18 JULY 2017",
      author: "AMANDA",
    },
    {
      imageSrc: "/image/blog_travel_01.jpg",
      title: "We visited the ancient theater in Macedonia",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "18 JULY 2017",
      author: "AMANDA",
    },
    {
      imageSrc: "/image/blog_travel_01.jpg",
      title: "A new door to the mysterious history",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "18 JULY 2017",
      author: "JESSICA",
    },
    {
      imageSrc: "/image/blog_travel_01.jpg",
      title: "The story of white ages in Pamukkale",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "17 JULY 2017",
      author: "MARTIN",
    },
    {
      imageSrc: "/image/blog_travel_01.jpg",
      title: "A short trip to the most beautiful martyrs of India",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "15 JULY 2017",
      author: "ADAM",
    },
    {
      imageSrc: "/image/blog_travel_01.jpg",
      title: "The country symbolizing the birth of Buddhism",
      description:
        "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.",
      name: name,
      date: "14 JULY 2017",
      author: "JACK",
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
          <Advertisement />
          <div
            className="travelsPost"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "10px",
              width: "100%",
              alignItems: "center",
            }}
          >
            {TravelData.map((data) => (
              <TravelPost
                imageSrc={data.imageSrc}
                title={data.title}
                date={data.date}
                name={data.name.toUpperCase()}
                author={data.author}
                description={data.description}
              />
            ))}
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

export default BlogCatagories04;
