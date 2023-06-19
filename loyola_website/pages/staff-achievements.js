import React from "react";
import { Lobster_Two, Oswald, Inter } from "next/font/google";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const staffAchievements = ({ achievements }) => {
  return (
    <div className="bg-gradient-to-tr from-slate-300 to-amber-50 pb-6 ">
      <h1
        className={`${lobster.className} custom-letter-spacing-wider text-6xl py-6 text-center text-shadow-custom-blue text-black `}
      >
        Staff Achievements
      </h1>
      <ul>
        {achievements.map((achievement) => (
          <li
            key={achievement.id}
            className={`max-w-xl py-8 text-black mx-auto ${inter.className} `}
          >
            {achievement.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default staffAchievements;

export async function getServerSideProps() {
  const url = "/api/staff-achievement";
  const res = await fetch(url);
  const achievements = await res.json();
  return { props: { achievements } };
}
