import Image from "next/image";

export default function CarouselItem({ slideId, slideImage }) {
  return (
    <div
      className="carousel-item relative w-full justify-center"
      id={slideId}
    >
      <div className="relative flex justify-around w-full transform -translate-y-1/2 left-4 right-4 top-1/2">
        <Image
          className="rounded-box"
          width={256}
          height={256}
          src={slideImage}
          alt={"image"}
        />
      </div>
    </div>
  );
}
