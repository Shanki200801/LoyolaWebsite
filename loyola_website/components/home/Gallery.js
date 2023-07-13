import React from "react";
import { Oswald, Inter } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

const Gallery = () => {
  console.log(allImages);
  return (
    <div className="bg-[url('~/public/backgrounds/bluebg-gallery.jpeg')] bg-cover bg-center bg-fixed">
      <h1
        className={`${oswald.className} text-center text-white text-5xl py-3 drop-shadow-md shadow-gray-400`}
      >
        Gallery
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3  place-content-around place-items-center py-6">
        {allImages.map((image) => {
          return (
            <div key={image.id}>
              <Image
                src={image.link}
                width={400}
                height={400}
                className="my-4 mx-8 hidden lg:block"
              />
              <Image
                src={image.link}
                width={400}
                height={400}
                className="my-4  px-2 lg:hidden"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const allImages = [
  { id: 1, link: "/events/celebracio/p10.jpg" },
  { id: 2, link: "/events/celebracio/p4.jpg" },
  { id: 3, link: "/events/celebracio/p1.jpg" },
  { id: 4, link: "/events/christmas22/p4.jpeg" },
  { id: 5, link: "/events/freshers22/p2.jpg" },
  { id: 6, link: "/events/glorium22/p1.jpg" },
  { id: 7, link: "/events/kannadarajyotsava22/p11.jpg" },
  { id: 8, link: "/events/parivarthana22/p7.jpg" },
  { id: 9, link: "/events/spandana22/p7.jpg" },
];

export default Gallery;
