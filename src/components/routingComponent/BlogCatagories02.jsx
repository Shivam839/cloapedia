import React from "react";
import NavBar from "../navbars/NavBar";
import Footer from "../footer/Footer";
import AuthorBar from "./AuthorBar";
import SideBar from "./SideBar";
import FoodBlog from "./FoodBlog";
import Advertisement from "../bodySection/Advertisement";

function BlogCatagories02() {
  const title = "Food & Drink";
  const name = "Food";
  const imgsrc = "/image/blog_square_07.jpg";
  const description =
    "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.";
  const foodData = [
    {
      title: "Banana-chip chocolate cake recipe",
      name: name,
      imageSrc: imgsrc,
      description: description,
      date: "11 JULY 2017",
      author: "MATLIDA",
    },
    {
      title: "10 practical ways to choose organic vegetables",
      name: name,
      imageSrc: imgsrc,
      description: description,
      date: "10 JULY 2017",
      author: "MATLIDA",
    },
    {
      title: "We are making homemade ravioli",
      name: name,
      imageSrc: imgsrc,
      description: description,
      date: "09 JULY 2017",
      author: "CLARA",
    },
    {
      title: "What do you think of a luxurious and elegant restaurant?",
      name: name,
      imageSrc: imgsrc,
      description: description,
      date: "05 JULY 2017",
      author: "JENNY",
    },
    {
      title: "10 different samples of vegetables",
      name: name,
      imageSrc: imgsrc,
      description: description,
      date: "04 JULY 2017",
      author: "MELINDA",
    },
    {
      title: "You can make money by giving recipes",
      name: name,
      imageSrc: imgsrc,
      description: description,
      date: "03 JULY 2017",
      author: "MATLIDA",
    },
    {
      title: "What do you say we make potatoes?",
      name: name,
      imageSrc: imgsrc,
      description: description,
      date: "02 JULY 2017",
      author: "MARTINS",
    },
    {
      title: "A chat with a cup of coffee conversation",
      name: name,
      imageSrc: imgsrc,
      description: description,
      date: "01 JULY 2017",
      author: "JESSICA",
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
          height: "2500px",
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
          {foodData.map((data, i) => {
            if (i < 3) {
              return (
                <FoodBlog
                  key={data.date}
                  title={data.title}
                  imageSrc={data.imageSrc}
                  description={data.description}
                  name={data.name}
                  date={data.date}
                  author={data.author}
                />
              );
            }
            return null; // Add this line to handle the case when the condition is not met
          })}
          <Advertisement />
          {foodData.map((data, i) => {
            if (i >= 3) {
              return (
                <FoodBlog
                  key={data.date}
                  title={data.title}
                  imageSrc={data.imageSrc}
                  description={data.description}
                  name={data.name}
                  date={data.date}
                  author={data.author}
                />
              );
            }
            return null; // Add this line to handle the case when the condition is not met
          })}
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

export default BlogCatagories02;
