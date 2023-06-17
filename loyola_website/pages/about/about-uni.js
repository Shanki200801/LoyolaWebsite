import React from "react";
import Image from "next/image";
import founderImg from "../../public/about/founder.webp";
import logoImg from "../../public/about/ldcLogo.webp";

import { Inter, Oswald, Lobster_Two } from "next/font/google";

const mainHeading = Lobster_Two({ subsets: ["latin"], weight: "400" });
const generalHeaders = Oswald({ subsets: ["latin"] });
const generalText = Inter({ subsets: ["latin"] });

const Founder = () => {
  return (
    <div className={`grid auto-rows-max grid-cols-15 gap-0 justify-center`}>
      <Image
        src={founderImg}
        className={`pl-5 pt-5 col-start-1 col-end-4 md:col-start-2 md:col-end-2 lg:col-start-2 lg:col-end-2 xl:col-start-2 xl:col-end-2 xl:w-4/5 xl:pt-3`}
      />
      <div
        className={`flex flex-col gap-2 px-5 py-2 col-start-1 col-end-10 md:col-start-3 md:col-end-10 lg:col-start-3 lg:col-end-10 xl:col-start-3 xl:col-end-10 xl:pl-0 xl:pr-9`}
      >
        <h2 className={`text-xl ${generalHeaders.className} uppercase font-medium underline underline-offset-2 decoration-dotted decoration-red-300`}>Founder</h2>
        <p className={`text-m ${generalText.className} tracking-tight`}>
          St Ignatius Loyola is the founder of the Jesuit Order that runs
          thousands of Educational Institutions all over the world. Born in
          Spain Ignatius gave up his career as a solider under the then king to
          become a solider of Jesus Christ and wanted to establish a world of
          humanity and justice. There are 16,000 Jesuits in the world today in
          different works for humanity with a heavy concentration in higher
          Education. The renowned worldwide Jesuit Universities are Loyola
          University Chicago, Fordham University, University of Washington in
          USA, Sophia University in Japan, and Loyola Universities in South
          America and so on.
        </p>
      </div>
    </div>
  );
};

const History = () => {
  return (
    <div className={`grid auto-rows-max grid-cols-15 gap-0 justify-center`}>
      <Image
        src={logoImg}
        className={`pl-8 pt-3 col-start-1 col-end-3 md:col-start-2 md:col-end-2 lg:col-start-2 lg:col-end-2 xl:col-start-2 xl:col-end-2 xl:w-4/5`}
      />
      <div
        className={`flex flex-col gap-2 px-5 py-2 col-start-1 col-end-10 md:col-start-3 md:col-end-10 lg:col-start-3 lg:col-end-10 xl:col-start-3 xl:col-end-10 xl:pl-0 xl:pr-9`}
      >
        <h2 className={`text-xl ${generalHeaders.className} uppercase font-medium underline underline-offset-2 decoration-dotted decoration-red-300`}>History</h2>
        <ul
          className={`text-m ${generalText.className} tracking-tight grid grid-rows-2 gap-5 pb-5`}
        >
          <li className={`row-span-1 `}>
            In the campus of Mount St Joseph, the first educational institution
            was Loyola School in 1982 for the economically poor students of the
            neighbourhood. In 1989 Loyola Primary and Higher Primary school were
            established. In 1992 another institution that was added was Loyola
            Industrial Training Institute, where poor students are given
            training in fitter trade, motor mechanic, driving, electrical
            maintenance, carpentry etc.Hundreds of students have been given
            training to make a living through these trades and have excelled in
            society. In 2008 Loyola High School was upgraded to Loyola Composite
            Pre -University College. Today the Pre -University College has a
            strength of 600 students with Science, Commerce and Arts streams.
          </li>
          <li className={`row-start-2`}>
            After several years of discernments and discussions the Jesuits of
            Karnataka Jesuit Province finally decided to start a degree College
            in the name of their Founder, St Ignatius Loyola. The Loyola Degree
            College started functioning from the academic year 2017-18 with B.
            Com and BA {`(`}Journalism,Communicative Englishand Psychology)
            courses. The College is affiliated to Bangalore University. The
            College is a unit of BANGLORE JESUIT EDUCATIONAL SOCIETY, Jesuit
            Nivas, Museum Road, Bengaluru - 560025. The Campus has a spacious
            building, a large playground with facilities for cricket,
            basketball, volley ball and other sports and games.
          </li>
        </ul>
      </div>
    </div>
  );
};

const AboutUni = () => {
  return (
    <div
      className={`grid grid-rows-15 items-center justify-center bg-red-100 text-black xl:gap-7`}
    >
      <h1
        className={`row-span-4 custom-letter-spacing-wider py-5 text-5xl text-center ${mainHeading.className} text-shadow-sm-red sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl xl:pb-0`}
      >
        About University
      </h1>
      <Founder />
      <History />
    </div>
  );
};

export default AboutUni;
