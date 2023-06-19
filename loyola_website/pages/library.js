import React from "react";
import { Lobster_Two, Inter } from "next/font/google";
import LibImg from "@/Assets/libraryImg.webp";
import Image from "next/image";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });

const library = ({ libraryResources }) => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 pb-8">
      <h1
        className={`text-black text-shadow-custom-blue text-6xl font-semibold font-serif text-center py-6 ${lobster.className}`}
      >
        Library
      </h1>
      <LibraryDesc />
      <Image
        src={LibImg}
        alt="library"
        width="100%"
        height="100%"
        className="my-8 rounded-2xl mx-auto"
      />

      <LibraryStats libraryResources={libraryResources} />
    </div>
  );
};

export default library;

const LibraryStats = ({ libraryResources }) => {
  return (
    <div className="mx-32 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white rounded-xl w-3/4  p-8">
      <p className={`${inter.className} pb-4 text-justify `}>
        Over the years the college library has a collection of large number of
        books and the statistics is tabulated below for reference
      </p>
      <div className="flex flex-col">
        <table className="mx-auto border border-white">
          <thead className="">
            <tr>
              <th className={`border-2 border-white p-3`}>
                Name of the resource
              </th>
              <th className={`border-2 border-white p-3`}>Numbers</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(libraryResources).map((libraryResource, i) => (
              <tr key={i}>
                <td className={`border-2 border-white p-3`}>
                  {libraryResource}
                </td>
                <td className={`border-2 border-white p-3`}>
                  {libraryResources[libraryResource]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const LibraryDesc = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white w-3/4 mx-32 my-6 p-8 rounded-xl">
      <p className={`${inter.className} pb-4 `}>
        Loyola Degree college library is a new library and 5 years old. It
        regularly subscribes to five national journals and three international
        journals, periodical/magazines and eight daily newspapers. It caters to
        the needs of more than 510 graduate students and 30 staff.
      </p>
      <p className={`${inter.className} pb-4 `}>
        The library follows the Dewey Decimal Scheme of Classification. Books
        are arranged on the shelves, Author wise, Semester wise and Subject
        wise. The Library is open from 8.30 a.m. to 4.00 p.m.
      </p>
      <p className={`${inter.className} pb-4 `}>
        The library can accommodate over 25 students at a time. Additional
        services provided by the library are as follows:
      </p>
      <ol className={`${inter.className} pb-4 list-decimal mx-12 `}>
        <li>Internet and Wi-Fi service</li>
        <li>E-newspaper service</li>
        <li>Reprographic service</li>
        <li>SC/ST Book Bank Service</li>
        <li>Lending service and</li>
        <li>Old question papers service</li>
      </ol>
    </div>
  );
};

export async function getServerSideProps() {
  const url = "/api/library-resources";
  const res = await fetch(url);
  const libraryResources = await res.json();
  return { props: { libraryResources } };
}
