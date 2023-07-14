import React from "react";
import { Lobster_Two, Inter, Oswald } from "next/font/google";
import Image from "next/image";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

const sports = ({ sportsData }) => {
  return (
    <div
      className={`bg-cover bg-[url('~/public/backgrounds/bgFive.webp')] bg-right bg-fixed`}
    >
      <div className={`bg-sky-200/80 py-6`}>
        <h1
          className={`${lobster.className} text-black text-shadow-custom-blue text-6xl font-semibold text-center`}
        >
          Sports
        </h1>

        {sportsData.map((sport_event) => (
          <div
            key={sport_event.id}
            className=" bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 lg:mx-24 mx-8 p-6 my-12 rounded-lg"
          >
            <h2
              className={`${oswald.className} text-xl text-center text-zinc-100 py-2`}
            >
              {sport_event.title}
            </h2>
            <EventDescription desc={sport_event.description} />
            {sport_event.table && (
              <div className="overflow-x-auto">
                <table className="mx-auto border-2 my-4 text-center text-zinc-100">
                  <thead>
                    <tr className="border-2">
                      <th className="  p-3">Sports</th>
                      <th className="  p-3">Date</th>
                      <th className="  p-3">Semifinals</th>
                      <th className="  p-3">Finals</th>
                      <th className="  p-3">Winner</th>
                    </tr>
                  </thead>
                  {sport_event.table && (
                    <tbody>
                      {sport_event.table.map((table) => (
                        <tr key={table.id}>
                          <td className=" p-3">{table.Sport}</td>
                          <td className=" p-3">{table.date}</td>
                          <td className=" p-3">
                            <ul>
                              <li>{table.semifinals[0]}</li>
                              <li>{table.semifinals[1]}</li>
                            </ul>
                          </td>
                          <td className=" p-3">{table.finals}</td>
                          <td className=" p-3">{table.winner}</td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default sports;

const EventDescription = ({ desc }) => {
  return (
    <div className={`${inter.className} text-gray-200`}>
      {desc.map((para) => {
        return <p>{para}</p>;
      })}
    </div>
  );
};
export async function getServerSideProps() {
  const url = "https://loyola-website.vercel.app/api/sports-data";
  const res = await fetch(url);
  const sportsData = await res.json();
  return { props: { sportsData } };
}
