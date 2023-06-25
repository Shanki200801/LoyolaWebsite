import React from "react";
import { Lobster_Two, Inter, Oswald } from "next/font/google";
import CommitteeMembers from "@/components/library/committee";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

const library_commitee = () => {
  return (
    <div className="bg-slate-300 py-6">
      <h1
        className={`py-4 font-extrabold text-2xl text-center ${oswald.className} text-black`}
      >
        Library Advisory Committee
      </h1>
      <CommitteeMembers />
    </div>
  );
};

export default library_commitee;
