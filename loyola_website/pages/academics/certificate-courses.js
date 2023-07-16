import * as React from "react";
import Image from "next/image";
import styles from "@/styles/cert-pg.module.css";
import finGrowth from "../../Assets/finGrowth.webp";
import excelLogo from "@/Assets/excelLogo.webp";
import tally from "@/Assets/tally.webp";
import photography from "@/public/academicsImg/photography.webp";
import { Space_Mono, Economica, Oswald } from "next/font/google";
import smallA from "@/public/academicsImg/smallA.webp";
import kannada from "@/public/academicsImg/kannada.webp";
import hindi from "@/public/academicsImg/hindi.webp";
import telugu from "@/public/academicsImg/telugu.webp";
import tamil from "@/public/academicsImg/tamil.webp";
import Link from "next/link";

const kaushanScript = Economica({ subsets: ["latin"], weight: "700" });
const novaCut = Space_Mono({ subsets: ["latin"], weight: "400" });

const Certificate = () => {
  return (
    <div
      className={`bg-cover bg-[url('~/public/backgrounds/bgFour.webp')] bg-center bg-fixed`}
    >
      <div className={`bg-fuchsia-100/90`}>
        <h2
          className={`flex justify-center pt-10 text-black text-6xl ${kaushanScript.className}`}
        >
          Certificate Courses
        </h2>
        <div
          id="courses-group"
          className="grid lg:grid-cols-3 grid-cols-2  mt-10"
        >
          <CertCard
            courseName="Tally ERP 9"
            className="justify-self-end"
            src={tally}
            bgGrad="bg-gradient-to-tr from-fuchsia-800 to-fuchsia-700"
          />
          <CertCard
            courseName="Advanced Excel"
            className="justify-self-center"
            src={excelLogo}
            bgGrad="bg-gradient-to-tr from-violet-700 to-violet-400"
          />
          <CertCard
            courseName="Photography"
            className="lg:justify-self-start justify-self-end overflow-auto lg:block hidden"
            src={photography}
            bgGrad="bg-gradient-to-tr from-fuchsia-800 to-fuchsia-700"
          />
          <div className="lg:hidden flex content-center h-48 w-64 justify-self-start mx-20 justify-center rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-touch-manipulation:[transform:rotateY(180deg)] place-content-center bg-gradient-to-tr from-fuchsia-800 to-fuchsia-700">
            <span className={`text-white text-4xl my-20 ${novaCut.className}`}>
              Photography
            </span>
          </div>
        </div>

        <h2
          className={`flex justify-center pt-10 text-black text-6xl ${kaushanScript.className} mt-16  `}
        >
          Study of Languages
        </h2>
        <div id="grid-container" className="mt-10">
          <div className={`grid lg:grid-cols-3 grid-cols-2`}>
            <LangCard
              lang="English"
              className="justify-self-end"
              src={smallA}
              bgGrad="bg-gradient-to-tr from-blue-700 to-blue-500"
            />
            <LangCard
              lang="Kannada"
              className="justify-self-center"
              src={kannada}
              bgGrad="bg-gradient-to-tr from-cyan-600 to-cyan-400"
            />
            <LangCard
              lang="Hindi"
              className="justify-self-start mx-28 lg:mx-0"
              src={hindi}
              bgGrad="bg-gradient-to-tr from-blue-700 to-blue-500"
            />
          </div>
          <div className={`grid grid-cols-2 lg:gap-48 gap-6 lg:mt-10 mt-1 `}>
            <LangCard
              lang="Tamil"
              className="justify-self-end"
              src={tamil}
              bgGrad="bg-gradient-to-tr from-cyan-600 to-cyan-400"
            />
            <LangCard
              lang="Telugu"
              className="justify-self-start"
              src={telugu}
              bgGrad="bg-gradient-to-tr from-cyan-600 to-cyan-400"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <CertBtn className="w-72 h-20 my-20" />
        </div>
      </div>
    </div>
  );
};

const CertCard = (props) => {
  return (
    <div
      className={`group lg:h-72 lg:w-72 w-48 h-44 my-2 [perspective:1000px] ${props.className}`}
    >
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-touch-manipulation:[transform:rotateY(180deg)]">
        <div
          className={`absolute inset-0 h-full w-full rounded-xl ${props.bgGrad} px-12 text-center text-slate-200`}
        >
          <div className="flex min-h-full flex-col items-center justify-center">
            <h1 className={`text-4xl font-bold ${novaCut.className}`}>
              {props.courseName}
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 bg-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex justify-center items-center">
          <Image
            className="h-auto w-5/6 rounded-xl object-cover [backface-visibility:hidden]"
            src={props.src}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const LangCard = (props) => {
  return (
    <div class={`lg:h-72 lg:w-72 w-44 h-44 relative mb-5 ${props.className}`}>
      <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
      <div class="absolute inset-0 transform hover:skew-y-12 transition duration-300">
        <div class={`h-full w-full ${props.bgGrad} rounded-lg shadow-2xl`}>
          <div
            className={`absolute inset-0 h-full w-full rounded-xl ${props.bgGrad} px-12 text-center text-slate-200`}
          >
            <div className="flex min-h-full flex-col items-center justify-center">
              <Image className="w-auto h-3/5" src={props.src} />
              <h1
                className={`text-4xl mt-2 text-black font-bold ${novaCut.className}`}
              >
                {props.lang}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CertBtn = (props) => {
  return (
    <Link
      href="/departments"
      class={`relative px-5 py-2 font-medium text-white group flex justify-center items-center ${props.className}`}
    >
      <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
      <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
      <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
      <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12 "></span>
      <span
        class={`relative text-4xl ${novaCut.className} group-hover:text-black`}
      >
        Faculty
      </span>
    </Link>
  );
};

export default Certificate;
