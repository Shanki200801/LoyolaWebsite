import React from "react";
import Image from "next/image";
import visionImg from "../../public/about/vision.webp";
import missionImg from "../../public/about/mission.webp";

import { Inter, Oswald, Lobster_Two } from "next/font/google";

const mainHeading = Lobster_Two({ subsets: ["latin"], weight: "400" });
const generalHeaders = Oswald({ subsets: ["latin"] });
const generalText = Inter({ subsets: ["latin"] });

const Vision = () => {
  return (
    <div className={`flex flex-col gap-3 px-4 justify-center`}>
      <h2
        className={`text-xl ${generalHeaders.className} sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase underline underline-offset-4 decoration-red-500 decoration-dotted decoration-2`}
      >
        Our <span className={`text-red-800 whitespace-pre`}>Vision</span>
      </h2>
      <p
        className={`text-m ${generalText.className} tracking-tight pb-4 sm:text-l md:text-l lg:text-l 2xl:text-xl`}
      >
        To <span className={`font-medium`}>empower</span> the students to be men
        and women for others.
      </p>
    </div>
  );
};

const Mission = () => {
  return (
    <div className={`flex flex-col gap-3 px-4 justify-center`}>
      <h2
        className={`text-xl ${generalHeaders.className} sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase underline underline-offset-4 decoration-red-500 decoration-dotted decoration-2`}
      >
        Our <span className={`text-red-800 whitespace-pre`}>Mission</span>
      </h2>
      <p
        className={`text-m ${generalText.className} tracking-tight pb-4 sm:text-l md:text-l lg:text-l 2xl:text-xl`}
      >
        The educational objective of Loyola Degree College is to{" "}
        <span className={`font-medium`}>prepare</span> men and women for the
        service of the Nation. The College provides students with plentiful
        opportunities to critically understand society and its structures so
        that education becomes a tool to work for a humane and just society.
        Stress is laid on academic excellence, character formation, social
        concern, and human development.
      </p>
    </div>
  );
};

const VisionMission = () => {
  return (
    <div
      className={`grid grid-rows-15 bg-red-100 text-black xl:gap-7 bg-cover bg-[url('~/public/about/bgFour.webp')] bg-bottom bg-fixed`}
    >
      <div className={`bg-red-50/90`}>
        <h1
          className={`row-span-4 custom-letter-spacing-wider py-5 text-4xl text-center ${mainHeading.className} text-shadow-sm-red sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl xl:pb-0`}
        >
          Vision & Mission
        </h1>
        <Vision />
        <Mission />
      </div>
    </div>
  );
};

export default VisionMission;

/*
const Test2 = () => {
    return (
      <div className={`lg:grid grid-cols-15`}>
          <Image src={visionImg} className={`col-span-1`}/>
        <div className={`col-start-2 col-end-15 flex flex-col gap-3 px-4 justify-center`}>
          <h2
            className={`text-xl ${generalHeaders.className} sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase underline underline-offset-4 decoration-red-400 decoration-dotted decoration-2`}
          >
            Our Mission
          </h2>
          <p
            className={`text-m ${generalText.className} tracking-tight pb-4 sm:text-l md:text-l lg:text-l 2xl:text-xl`}
          >
            The educational objective of Loyola Degree College is to prepare men
            and women for the service of the Nation. The College provides students
            with plentiful opportunities to critically understand society and its
            structures so that education becomes a tool to work for a humane and
            just society. Stress is laid on academic excellence, character
            formation, social concern, and human development.
          </p>
        </div>
      </div>
    );
  };

const Test = () => {
  return (
    <div className={`lg:grid grid-cols-[120px_minmax(900px,_1fr)_100px]`}>
        <Image src={missionImg} className={`col-start-1 col-end-1`}/>
      <div className={`col-start-2 col-end-15 flex flex-col gap-3 px-4`}>
        <h2
          className={`text-xl ${generalHeaders.className} sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase underline underline-offset-4 decoration-red-400 decoration-dotted decoration-2`}
        >
          Our Mission
        </h2>
        <p
          className={`text-m ${generalText.className} tracking-tight pb-4 sm:text-l md:text-l lg:text-l 2xl:text-xl`}
        >
                  To empower the students to be men and women for others.

        </p>
      </div>
    </div>
  );
};
 */
