import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Oswald, Inter } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const StaffCard = ({
  profileimage,
  name,
  designation,
  education,
  description,
}) => {
  return (
    <>
      <div className="max-w-md py-4 px-8 bg-white bord shadow-lg rounded-lg my-10">
        <div className="flex justify-center md:justify-end -mt-16">
          <Image
            className="h-20 w-20 object-cover rounded-full border-2 border-navbar-theme"
            width={20}
            height={20}
            src={profileimage}
            alt={name}
          />
        </div>
        <div>
          <h2
            className={`text-gray-800  px-4 rounded-lg text-center text-xl mt-2 bg-blue-300 font-semibold ${oswald.className}`}
          >
            {name}
          </h2>
          <div className={`${inter.className}`}>
            <p className="mt-2 px-4 text-gray-800 text-base font-semibold">
              {designation}
            </p>
            <p className="mt-2 px-4 text-gray-800 text-sm font-medium">
              {education}
            </p>
            <p className="mt-2 text-gray-600 lg:text-justify text-sm font-normal lg:px-4 px-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffCard;
