import React from "react";
import { Lobster_Two, Inter, Oswald } from "next/font/google";
import CommitteeMembers from "@/components/library/committee";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

const library_commitee = () => {
  return (
    <div
      className={`bg-cover bg-[url('~/public/backgrounds/bgFour.webp')] bg-center bg-fixed`}
    >
      <div className={`bg-sky-100/90 pb-8`}>
        <h1
          className={`py-4 font-extrabold text-4xl  text-center ${oswald.className} text-black`}
        >
          Library Advisory Committee
        </h1>
        <CommitteeMembers />
      </div>
    </div>
  );
};

export default library_commitee;
