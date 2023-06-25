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
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 py-6">
      <h1
        className={`text-4xl text-center text-black shadow-blue-800 ${lobster.className}`}
      >
        Previous year Question papers
      </h1>
      {/* Course selector */}
      <div className="flex flex-row justify-around py-4">
        <button
          className={`p-2 rounded-2xl ${
            course === "BA"
              ? "bg-blue-600 text-white"
              : "text-blue-700 bg-inherit"
          } `}
          onClick={() => setCourse("BA")}
        >
          Bachelors of Arts
        </button>
        <button
          className={`p-2 rounded-2xl ${
            course === "BCOM"
              ? "bg-blue-600 text-white"
              : "text-blue-700 bg-inherit"
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
      <div className="flex flex-row justify-center py-4">
        {["Semester 1", "Semester 2", "Semester 3", "Semester 4"].map(
          (item, i) => (
            <button
              key={i}
              className={`p-2 rounded-2xl mx-4   ${
                semester === item
                  ? "bg-blue-600 text-white"
                  : "text-blue-700 bg-inherit"
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
            <li key={i} className="py-2 px-32 ">
              <a
                href={item}
                className="visited:text-indigo-800 text-black"
                target="_blank"
              >
                {item.split("/")[3]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default libraryQP;
export async function getServerSideProps() {
  // const url = "http://localhost:3000/api/qp-details";
  const url = "https://loyola-website.vercel.app/api/staff-achievement";

  const res = await fetch(url);
  const qp_details = await res.json();
  return { props: { qp_details } };
}
