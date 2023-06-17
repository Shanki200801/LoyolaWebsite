import React from "react";
import NewsList from "@/components/news-events-page/NewsList";
import { Lobster_Two } from "next/font/google";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });

const news_events = ({ eventDataExport }) => {
  return (
    <div className=" bg-gradient-to-tr from-slate-300 to-zinc-300">
      <h1
        className={` text-black text-shadow-custom-blue text-6xl font-semibold ${lobster.className}  text-3xl font-serif text-center py-6`}
      >
        News And Events
      </h1>
      <div className="flex flex-row  justify-center">
        <div className="w-full my-4px">
          <NewsList eventDataExport={eventDataExport} />
        </div>
        {/* <div className='w-1/4'><CalenderComponent/></div> */}
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const url = "http://localhost:3000/api/event-data";
  const res = await fetch(url);
  const eventDataExport = await res.json();
  return { props: { eventDataExport } };
}
export default news_events;
