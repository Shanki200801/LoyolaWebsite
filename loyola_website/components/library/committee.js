import React from "react";

import { Lobster_Two, Inter, Oswald } from "next/font/google";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

const committee_members = [
  {
    SlNo: 1,
    name: "Fr. Alphonse Fernandes S J",
    department: "Principal",
    position: "Chairperson",
  },
  {
    SlNo: 2,
    name: "Mr. K R Kumar",
    department: "Librarian",
    position: "Secretary",
  },
  {
    SlNo: 3,
    name: "Fr. Pratap Chandru S J",
    department: "Department of Psychology",
    position: "Member",
  },
  {
    SlNo: 4,
    name: "Mr. Swetha",
    department: "Department of Commerce",
    position: "Member ",
  },
  {
    SlNo: 5,
    name: "Ms. Rowena",
    department: "Department of English",
    position: "Member",
  },
  {
    SlNo: 6,
    name: "Dr. Kumarswamy",
    department: "Department of Kannada",
    position: "Member",
  },
  {
    SlNo: 7,
    name: "Dr. Tara Nair",
    department: "Department of Hindi",
    position: "Member",
  },
  {
    SlNo: 8,
    name: "Mr. Lazarus",
    department: "Department of Journalism",
    position: "Member",
  },
  {
    SlNo: 9,
    name: "Mr. Vignesh ",
    department: "Department of Political Science",
    position: "Member",
  },
  {
    SlNo: 10,
    name: "Nominated from UG Student",
    department: "Nominated Student",
    position: "Member",
  },
];
const LibraryPeople = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white w-3/4 mx-32 p-8 rounded-xl">
      <p className={`${inter.className} font-medium text-lg py-8`}>
        The Library advisory committee has representatives from every department
        who facilitate the smooth functioning of the library, safeguard the
        interest of all sections of the library users, formulate policies, rules
        & regulations and implement the library policies in a judicious manner.
        Overall, the Library Advisory Committee addresses issues, problems and
        concerns related to the library and makes recommendations to the
        management on library related matters.{" "}
      </p>

      <table className="mx-auto w-3/4 border border-white text-white">
        <thead>
          <tr>
            <th className={`border-2 border-white p-3`}>Sl No.</th>
            <th className={`border-2 border-white p-3`}>Members</th>
            <th className={`border-2 border-white p-3`}>Department</th>
            <th className={`border-2 border-white p-3`}>
              Position in the committee
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              SlNo: 1,
              name: "Fr. Alphonse Fernandes S J",
              department: "Principal",
              position: "Chairperson",
            },
            {
              SlNo: 2,
              name: "Mr. K R Kumar",
              department: "Librarian",
              position: "Secretary",
            },
            {
              SlNo: 3,
              name: "Fr. Pratap Chandru S J",
              department: "Department of Psychology",
              position: "Member",
            },
            {
              SlNo: 4,
              name: "Mr. Swetha",
              department: "Department of Commerce",
              position: "Member ",
            },
            {
              SlNo: 5,
              name: "Ms. Rowena",
              department: "Department of English",
              position: "Member",
            },
            {
              SlNo: 6,
              name: "Dr. Kumarswamy",
              department: "Department of Kannada",
              position: "Member",
            },
            {
              SlNo: 7,
              name: "Dr. Tara Nair",
              department: "Department of Hindi",
              position: "Member",
            },
            {
              SlNo: 8,
              name: "Mr. Lazarus",
              department: "Department of Journalism",
              position: "Member",
            },
            {
              SlNo: 9,
              name: "Mr. Vignesh ",
              department: "Department of Political Science",
              position: "Member",
            },
            {
              SlNo: 10,
              name: "Nominated from UG Student",
              department: "Nominated Student",
              position: "Member",
            },
          ].map((item, i) => (
            <tr key={i}>
              <td className={`border-2 border-white p-3`}>{item.SlNo}</td>
              <td className={`border-2 border-white p-3`}>{item.name}</td>
              <td className={`border-2 border-white p-3`}>{item.department}</td>
              <td className={`border-2 border-white p-3`}>{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p
        className={`py-4 pt-6 font-semibold text-lg text-center ${oswald.className}`}
      >
        Library staff profile:
      </p>
      <table className="mx-auto w-3/4 border border-white text-white">
        <thead>
          <tr>
            <th className={`border-2 border-white p-3`}>Name</th>
            <th className={`border-2 border-white p-3`}>Qualification</th>
            <th className={`border-2 border-white p-3`}>Designation</th>
            <th className={`border-2 border-white p-3`}>Date of joining</th>
            <th className={`border-2 border-white p-3`}>Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`border-2 border-white p-3`}>Mr. K R KUMAR</td>
            <td className={`border-2 border-white p-3`}>M.lisc</td>
            <td className={`border-2 border-white p-3`}>Librarian</td>
            <td className={`border-2 border-white p-3`}>02.06.2018</td>
            <td className={`border-2 border-white p-3`}>8 years</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LibraryPeople;
