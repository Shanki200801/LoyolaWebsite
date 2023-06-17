import React from "react";
import Image from "next/image";
import { Lobster_Two, Oswald, Inter } from "next/font/google";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const FacilityCard = ({ image, title, description }) => {
  return (
    <div className="my-12 flex flex-row mx-16 p-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 rounded-xl">
      <div className="w-1/4 ">
        <Image
          src={image}
          alt="infrastructure"
          width={275}
          height={275}
          className="mx-auto rounded-xl"
        />
      </div>
      <div className="w-3/4 px-8  my-auto">
        <h3
          className={`text-2xl font-bold text-black mb-2 ${oswald.className}`}
        >
          {title}
        </h3>
        <p
          className={`text-base text-gray-600 text-justify ${inter.className}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FacilityCard;
