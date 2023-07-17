import React from "react";
import { Lobster_Two, Oswald, Inter } from "next/font/google";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const AntiRagging = () => {
  return (
    <div className="pb-8">
      <h1
        className={`${lobster.className} custom-letter-spacing-wider lg:text-5xl text-4xl py-6 text-center text-shadow-custom-blue text-black`}
      >
        Anti-Ragging Cell
      </h1>
      <div className=" text-black lg:mx-80 mx-8 bg-gradient-to-b from-violet-300 to-violet-500 p-6 text-justify rounded-lg">
        To root out ragging in all its forms from the institution, an
        anti-ragging cell has been established as per the guidelines of UGC.
        Ragging in any form is totally banned in the entire institution and
        strict action against those found guilty of ragging and/or abetting
        ragging is taken. All complaints pertaining to any kind of ragging by
        any student/group of students of the College inside or outside the
        College campus may be reported to ‘Anti-ragging Cell’
      </div>
    </div>
  );
};

export default AntiRagging;
