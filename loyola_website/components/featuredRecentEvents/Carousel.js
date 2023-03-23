import Icon from "../../Assets/GitHub-Mark.png";
import CarouselItem from "./CarouselItem";

import { useState } from "react";

export default function Carousel({ slides }) {
  let count = slides.length;
  const [prev, setPrev] = useState(count);
  const [next, setNext] = useState(2);

  let carouselItems = slides.map((slide) => (
    <CarouselItem
      slideId={"slide" + slide.id}
      key={slide.id}
      slideImage={Icon}
    />
  ));

  return (
    <div className="flex">
      <div className="text-center self-center">
        <a
          onClick={() => {
            setPrev(prev == 1 ? count : prev - 1);
            setNext(next == 1 ? count : next - 1);
          }}
          href={"#slide" + prev}
          className="btn btn-circle bg-black"
        >
          &lt;
        </a>
      </div>

      <div className="carousel carousel-center w-full">{carouselItems}</div>
      <div className="text-center self-center">
        <a
          onClick={() => {
            setPrev(prev == count ? 1 : prev + 1);
            setNext(next == count ? 1 : next + 1);
          }}
          href={"#slide" + next}
          className="btn btn-circle bg-black"
        >
          &gt;
        </a>
      </div>
    </div>
  );
}
