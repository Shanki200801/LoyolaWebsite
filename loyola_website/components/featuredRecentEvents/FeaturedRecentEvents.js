import Carousel from "react-material-ui-carousel";
import Item from "./Item";

export default function FeaturedRecentEvents() {
  const slides = [
    {
      id: 1,
      image: "",
      message: "",
    },
    {
      id: 2,
      image: "",
      message: "",
    },
    {
      id: 3,
      image: "",
      message: "",
    },
    {
      id: 4,
      image: "",
      message: "",
    },
    {
      id: 5,
      image: "",
      message: "",
    },
  ];

  return (
    <div className="container m-auto px-16 py-8">
      <div className="text-center text-5xl">Events</div>
      <div className="tabs">
        <a className="tab tab-lifted tab-lg tab-rounded-lg tab-active m-2">
          Featured
        </a>
        <a className="tab tab-lifted tab-lg tab-rounded-lg m-2">Recent</a>
      </div>
      <Carousel navButtonsAlwaysVisible={true} animation="slide">
        {slides.map((slide, index) => (
          <Item slide={slide} key={index} />
        ))}
      </Carousel>
    </div>
  );
}
