import React from "react";
import { Lobster_Two, Oswald, Inter } from "next/font/google";
import { useState, useEffect } from "react";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const studentAchievements = ({ achievements }) => {
  return (
    <div
      className={`bg-[url('~/public/backgrounds/bgTwo.webp')] bg-cover bg-center bg-fixed`}
    >
      <div className={`bg-sky-100/90 pb-6`}>
        <h1
          className={`${lobster.className} custom-letter-spacing-wider text-6xl py-6 text-center text-shadow-custom-blue text-black `}
        >
          Student Achievements
        </h1>
        <div className="mx-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="max-w-xl text-black mx-auto ">
              <div className="flex flex-col gap-2 px-3 py-2">
                <h2
                  className={`text-xl ${oswald.className} underline text-center underline-offset-4 decoration-sky-500`}
                >
                  {achievement.title}
                </h2>
                <p className={`text-m ${inter.className} tracking-tight pb-8`}>
                  {achievement.description}
                </p>
                {achievement.table && (
                  <table className="table-auto mx-auto pb-8">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Register Number</th>
                        <th className="px-4 py-2">Student Name</th>
                        <th className="px-4 py-2">GPA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {achievement.table.map((student) => (
                        <tr key={student.id}>
                          <td className="px-4 py-2 text-center">
                            {student.regNo}
                          </td>
                          <td className="px-4 py-2 text-center case">
                            {student.name}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {student.GPA}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default studentAchievements;

export async function getServerSideProps() {
  const url = "https://loyola-website.vercel.app/api/student-achievement";
  const res = await fetch(url);
  const achievements = await res.json();
  return { props: { achievements } };
}
