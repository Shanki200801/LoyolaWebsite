import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Lobster_Two, Inter, Oswald } from "next/font/google";
import { useState } from "react";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

const libraryQP = ({ qp_details }) => {
  const [course, setCourse] = useState("BA");
  const [semester, setSemester] = useState("Semester 1");
  return (
    <div
      className={`bg-cover bg-[url('~/public/backgrounds/bgTwo.webp')] bg-center bg-fixed`}
    >
      <div className={`bg-blue-100/90 py-8`}>
        <h1
          className={`text-4xl text-center text-black shadow-blue-800 ${lobster.className}`}
        >
          Previous Year Question papers
        </h1>
        {/* Course selector */}
        <div className="flex flex-row justify-around py-4">
          <button
            className={`p-2 rounded-2xl ${
              course === "BA"
                ? "bg-sky-600 text-white"
                : "text-sky-800 bg-inherit"
            } `}
            onClick={() => setCourse("BA")}
          >
            Bachelors of Arts
          </button>
          <button
            className={`p-2 rounded-2xl ${
              course === "BCOM"
                ? "bg-sky-600 text-white"
                : "text-sky-800 bg-inherit"
            }`}
            onClick={() => setCourse("BCOM")}
          >
            Bachelors of Commerce
          </button>
        </div>
        {/* Course heading */}
        <h2 className={`text-center text-2xl text-black ${oswald.className}`}>
          {course === "BA" ? "Bachelors of Arts" : "Bachelors of Commerce"}
        </h2>
        {/* semester selector */}
        <div className="flex flex-row justify-center py-4 px-2">
          {["Semester 1", "Semester 2", "Semester 3", "Semester 4"].map(
            (item, i) => (
              <button
                key={i}
                className={`p-2 rounded-2xl mx-4   ${
                  semester === item
                    ? "bg-sky-600 text-white"
                    : "text-sky-800 bg-inherit"
                }`}
                onClick={() => setSemester(item)}
              >
                {item}
              </button>
            )
          )}
        </div>
        {/* Content holder */}
        <div className={` text-blue-500 ${inter.className}  `}>
          <ul>
            {qp_details[course][semester].map((item, i) => (
              <li key={i} className="py-2 lg:px-32 px-8 ">
                <a
                  href={item}
                  className="visited:text-blue-800 text-black hover:underline underline-offset-2 decoration-sky-800 hover:font-semibold hover:text-sky-900"
                  target="_blank"
                >
                  {item.split("/")[3]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default libraryQP;
export async function getServerSideProps() {
  // const url = "http://localhost:3000/api/qp-details";
  const url = "https://loyola-website.vercel.app/api/qp-details";

  const res = await fetch(url);
  const qp_details = await res.json();
  return { props: { qp_details } };
}
