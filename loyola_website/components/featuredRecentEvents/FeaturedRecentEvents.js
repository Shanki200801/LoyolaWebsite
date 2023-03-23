import Carousel from "./Carousel";

const slides = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

export default function FeaturedRecentEvents() {
  return (
    <div className="container m-auto">
      <div className="text-center text-5xl">Events</div>
      <div className="tabs">
        <a className="tab tab-lifted tab-lg tab-rounded-lg tab-active m-2">
          Featured
        </a>
        <a className="tab tab-lifted tab-lg tab-rounded-lg m-2">Recent</a>
      </div>
      <Carousel slides={slides}></Carousel>
    </div>
  );
}
