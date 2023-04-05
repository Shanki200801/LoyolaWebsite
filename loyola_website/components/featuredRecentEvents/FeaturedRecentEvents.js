import Carousel from "react-material-ui-carousel";
import Item from "./Item";



export default function FeaturedRecentEvents() {
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

  return (
    <div className="container m-auto px-16 py-8 bg-slate-300">
      <div className="text-center text-5xl text-navbar-theme m-4 ">Events</div>
      <div className="tabs flex items-center justify-center">
        <a className="tab tab-lifted tab-lg tab-rounded-lg w-1/5 bg-[#a60a1c] rounded-xl text-white m-2">
          Featured
        </a>
        <a className="tab tab-lifted tab-lg tab-rounded-lg w-1/5 text-black bg-slate-300 m-2 rounded-xl">Recent</a>
      </div>
      <Carousel navButtonsProps={{
        style: { backgroundColor: '#a60a1c' }
      }} navButtonsAlwaysVisible={true} animation="slide">
        {slides.map((slide, index) => (
          <Item slide={slide} key={index} />
        ))}
      </Carousel>
    </div>
  );
}
