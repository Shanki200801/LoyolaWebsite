import React from "react";
import { Lobster_Two, Inter, Oswald } from "next/font/google";
import LibImg from "@/Assets/libraryImg.webp";
import LibImg2 from "@/Assets/libraryImg4.webp";
import Image from "next/image";
import LibraryCommitteeImg from "@/Assets/Library_Advisory_Committee.png";
import QPimage from "@/Assets/question_paper.png";
import SyllabusImg from "@/Assets/syllabus.png";
import Link from "next/link";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

const library = ({ libraryResources }) => {
  return (
    <div
      className={`bg-cover bg-[url('~/public/backgrounds/bgFour.webp')] bg-center bg-fixed`}
    >
      <div className={`bg-blue-100/90`}>
        <h1
          className={`text-black text-shadow-custom-blue lg:text-6xl text-5xl font-semibold font-serif text-center py-6 ${lobster.className}`}
        >
          Library
        </h1>
        <LibraryDesc />
        <Image
          src={LibImg}
          alt="library"
          width="100%"
          height="100%"
          className="hidden lg:block my-8 rounded-2xl mx-auto"
        />
        <Image
          src={LibImg}
          alt="library"
          width="300"
          height="200"
          className="block lg:hidden my-8 rounded-2xl mx-auto"
        />

        <LibraryStats libraryResources={libraryResources} />
        <RulesAndRegulations />
        <LibraryTiming />
        <h2
          className={`text-black text-shadow-custom-blue text-3xl font-semibold font-serif text-center py-6 pt-12 ${lobster.className}`}
        >
          Services
        </h2>
        <LibNavigator />
      </div>
    </div>
  );
};

export default library;

const LibraryStats = ({ libraryResources }) => {
  return (
    <div className="lg:mx-32 mx-8 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white rounded-xl   p-8">
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
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white lg:w-3/4 lg:mx-32 my-6 mx-8 lg:p-8 p-3 rounded-xl">
      <p className={`${inter.className} pb-4 `}>
        Loyola Degree College has a well equipped The Department of Library
        Information and Centre established in the year 2017, that caters to 510
        students and 32 staff. The library currently has over thousands of books
        and journals. It also subscribes to e- resources in association with the
        St Joseph’s University. The library has about 5 systems for students to
        access e- resources. It also provides Wi-Fi enabling students to use
        their laptops in the Library. Library subscribes to newspapers which
        include English and Kannada, national journals and international
        journals, periodical, magazines, etc. The library follows the Dewey
        Decimal Scheme of Classification.
      </p>
      <p className={`${inter.className} pb-4 `}>
        The library follows the Dewey Decimal Scheme of Classification. Books
        are arranged on the shelves, Author wise, Semester wise and Subject
        wise. The Library is open from 8.30 a.m. to 4.00 p.m.
      </p>
      <p className={`${inter.className} pb-4 `}>
        Library subscribes to newspapers which include English and Kannada,
        national journals and international journals, periodical, magazines,
        etc. The library follows the Dewey Decimal Scheme of Classification.
      </p>
      <p className={`${inter.className} pb-4 `}>
        Loyola Degree College Library Committee conducts Library Orientation
        programme every academic year in the month of August for all the
        first-year students of UG. The students are familiarized with the
        library facilities.
      </p>
      <p className="pt-6">
        The library can accommodate over 25 students at a time. Additional
        services provided by the library are as follows:{" "}
      </p>
      <ol className={`${inter.className} pb-4 list-decimal mx-12 `}>
        <li>Circulation Service</li>
        <li>Reference Service</li>
        <li>News Paper Clipping Service</li>
        <li>Renewal Service </li>
        <li>Book reservation service </li>
        <li>E-Library Service</li>
      </ol>
      <p>Facilities offered by the library are as follows:</p>
      <ol className={`${inter.className} pb-4 list-decimal mx-12 `}>
        <li>Wi-Fi connectivity</li>
        <li>Reprographic facilities</li>
        <li>Old question papers facilities</li>
        <li>SC/ST Book bank facilities</li>
      </ol>
    </div>
  );
};

const RulesAndRegulations = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white  lg:mx-32 mx-8 my-6 p-8 rounded-xl">
      <p className={`${inter.className} font-bold `}>
        General Rules and Regulations:
      </p>
      <ul className={`${inter.className} pb-4 list-decimal lg:mx-12 mx-2 `}>
        {[
          "Loyola Library is NO-MOBILE ZONE.",
          "Students must wear ID card at all times",
          "Maintain strict silence in the Reading Room and other areas",
          "DO NOT enter the reading or lending section with your baggage. Keep them in the wooden shelves at the Gate Counter",
          "DO NOT crowd around any counter, but stand in queue and wait for your turn",
          "ID card is NON-TRANSFERRABLE. Using someone else’s ID is a punishable offence",
          "Kindly cooperate and interact gently with library staff.",
          "In case of any difficulty library users can approach the Librarian.",
          "Only present students and staff of the College can use the Library. No ex-student or outsiders are allowed to use the Library.",
          "Any indiscipline in the Library will lead to cancellation of membership and/or serious disciplinary actions.",
          "Students should clear all library dues in time to obtain Hall Ticket/Admit Card before Semester Exam.",
          "Students and Staff members must settle all library dues to obtain Clearance Certificate from the Library Office on completion of studies or duty.",
          "Sleeping, eating and having refreshments inside the Library are strictly prohibited.",
          "Do take care of library books and journals.",
        ].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const LibraryTiming = () => {
  return (
    <div className="flex flex-col lg:flex-row py-4 items-center rounded-2xl justify-around bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 lg:mx-48 mx-16">
      <Image
        src={LibImg2}
        width={300}
        height={200}
        className="hidden lg:block bg-transparent rounded-xl"
        alt="Library"
      />
      <Image
        src={LibImg2}
        width={200}
        height={1500}
        className="lg:hidden bg-transparent rounded-xl"
        alt="Library"
      />
      <div className="mx-4 text-white">
        <p
          className={`py-4 font-semibold text-lg text-left ${oswald.className}`}
        >
          Library timings:
        </p>
        <p className={`font-light ${inter.className}`}>
          Monday to Friday 9:00 am to 4:30 pm
        </p>
        <p className={`font-light ${inter.className}`}>
          Saturday 9:00 am to 1:00 pm
        </p>
        <p
          className={`py-4 font-semibold text-lg text-left ${oswald.className}`}
        >
          E-Library Details:
        </p>
        <p className={`font-light ${inter.className}`}>
          Website: sjc.knimbus.com
        </p>
        <p className={`font-light ${inter.className}`}>
          User ID: student email
        </p>
        <p className={`font-light ${inter.className}`}>
          Password: user@knimbus
        </p>
      </div>
    </div>
  );
};

const LibNavigator = () => {
  return (
    <div className="flex flex-row justify-around pt-4 text-black">
      <Link
        className="flex flex-col w-30 hover:-translate-y-2 transition-all"
        href="/infrastructure/library-committee"
      >
        <Image src={LibraryCommitteeImg} width={100} height={100} />
        <div className={`${inter.className} pb-4 text-ellipsis `}>
          Committee
        </div>
      </Link>
      <Link
        className="flex flex-col w-30 hover:-translate-y-2 transition-all"
        href="/infrastructure/libraryQP"
      >
        <Image src={QPimage} width={100} height={100} />
        <div className={`${inter.className} pb-4 text-ellipsis`}>
          Question Papers
        </div>
      </Link>
      <Link
        className="flex flex-col w-30 justify-center items-center hover:-translate-y-2 transition-all"
        href="/academics/ba"
      >
        <Image src={SyllabusImg} width={100} height={100} />
        <div className={`${inter.className} pb-4 text-ellipsis `}>Syllabus</div>
      </Link>
    </div>
  );
};
export async function getServerSideProps() {
  const url = "https://loyola-website.vercel.app/api/library-resources";
  const res = await fetch(url);
  const libraryResources = await res.json();
  return { props: { libraryResources } };
}
