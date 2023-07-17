import React from "react";
import Image from "next/image";
import styles from "../../styles/news-events-page.module.css";
import Link from "next/link";
import { Inter, Oswald } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });
const NewsFeatureCard = ({
  id,
  thumbnail,
  title,
  description,
  longdescription,
  photos,
  eventroute,
}) => {
  const [hasThumbnail, setHasThumbnail] =
    thumbnail == "" ? useState(false) : useState(true);

  // const eventlink = `/news_events/${id}`;
  return (
    <>
      <div className={`${styles.cardcontainer} my-4 hidden lg:block`}>
        {/* Image */}
        {hasThumbnail && (
          // <div className={`${styles.eventimage} odd:float-right bg-transparent`}>
          <div
            className={`odd:float-right bg-transparent h-32 absolute ml-24 mt-12`}
          >
            <Image
              src={thumbnail}
              alt="News"
              className={`${styles.image} rounded-lg`}
              width={400}
              height={400}
            />
          </div>
        )}

        {/* Content */}
        <div className={`${styles.eventinfo} rounded-2xl ${inter.className} `}>
          <h3
            className={`text-xl text-blue-700 text-center font-bold mb-4 ${oswald.className}`}
          >
            {title}
          </h3>
          <div className="text-gray-600">{description}</div>
          <Link
            href={`/news_events/${eventroute}`}
            className="relative  right-0 bottom-0 text-gray-600 font-semibold"
          >
            read more..
          </Link>
        </div>
      </div>

      {/* ----------------------------mobile UI --------------------------------------------- */}
      <div className="bg-white border-solid border-b-blue-900 border-b-4  flex flex-col items-center m-3 rounded-3xl drop-shadow-lg lg:hidden ">
        <h3
          className={`text-xl text-blue-700 text-center font-bold mb-4 ${oswald.className}`}
        >
          {title}
        </h3>
        {hasThumbnail && (
          <div>
            <Image
              src={thumbnail}
              alt="News"
              className={`rounded-xl mx-2 border-4 border-blue-900 border-solid`}
              width={300}
              height={180}
            />
          </div>
        )}
        <div>
          <div
            className={`text-gray-600 text-justify mx-4 my-1 ${inter.className}`}
          >
            {description}
          </div>
          <Link
            href={`/news_events/${eventroute}`}
            className={`relative  right-0 bottom-0 text-gray-600 font-semibold mb-1 mx-4 ${inter.className}`}
          >
            read more..
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsFeatureCard;
