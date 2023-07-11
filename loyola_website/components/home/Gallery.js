import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const slides = [
    {
      id: 1,
      image: "/carousel1.jpg",
      message: "carousel image 1",
    },
    {
      id: 2,
      image: "/carousel2.jpg",
      message: "carousel image 2",
    },
    {
      id: 3,
      image: "/carousel3.jpg",
      message: "carousel image 3",
    },
    {
      id: 4,
      image: "/carousel4.jpg",
      message: "carousel image 4",
    },
    {
      id: 5,
      image: "/carousel5.jpg",
      message: "carousel image 5",
    },
  ];

  const [photoIndex, setPhotoIndex] = useState("highlights");

  return (
    <div className="container px-16 py-8 bg-slate-300">
      <div className="text-center text-2xl font-bold text-indigo-900 m-4 ">
        GALLERY
      </div>
      <div className="tabs flex items-center justify-center">
        <button
          onClick={() => setPhotoIndex("highlights")}
          className={`tab text-lg tab-lifted tab-lg tab-rounded-lg w-1/5   ${
            photoIndex === "highlights"
              ? "bg-navbar-theme text-white "
              : "bg-slate-400 text-black"
          } m-2 rounded-xl `}
        >
          Highlights
        </button>
        <button
          onClick={() => setPhotoIndex("photos")}
          className={`tab text-lg tab-lifted tab-lg tab-rounded-lg w-1/5 m-2 rounded-xl ${
            photoIndex === "photos"
              ? "bg-navbar-theme text-white"
              : "bg-slate-400 text-black"
          }`}
        >
          Photos
        </button>
      </div>

      {/* currently both highlights and photos have same things */}
      {photoIndex === "highlights" && (
        <Carousel
          navButtonsProps={{
            style: { backgroundColor: "rgb(0,61, 122)" },
          }}
          navButtonsAlwaysVisible={true}
          animation="slide"
        >
          {slides.map((slide, index) => (
            <Item slide={slide} key={index} />
          ))}
        </Carousel>
      )}
      {photoIndex === "photos" && (
        <Carousel
          navButtonsProps={{
            style: { backgroundColor: "rgb(0,61, 122)" },
          }}
          navButtonsAlwaysVisible={true}
          animation="slide"
        >
          {slides.map((slide, index) => (
            <Item slide={slide} key={index} />
          ))}
        </Carousel>
      )}
    </div>
  );
}

//import PlaceholderImage from "../../Assets/carousel3.jpg";
function Item({ slide }) {
  const img_src = slide.image;
  const img_alt = slide.message;
  // console.log("This is the image path "+img_src);
  return (
    <div className="h-2/4">
      <img
        className="mx-auto w-3/4"
        //Check this

        src={img_src}
        alt={img_alt}

        //src={PlaceholderImage}

        // width={256}
        // height={256}
        //alt={'example event displaying the GitHub\'s mascot "Octocat"'}
      />
    </div>
  );
}
