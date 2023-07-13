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
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white lg:mx-32 mx-8 p-8 rounded-xl">
      <p className={`${inter.className} font-medium lg:text-lg lg:py-8 py-4 `}>
        The Library advisory committee has representatives from every department
        who facilitate the smooth functioning of the library, safeguard the
        interest of all sections of the library users, formulate policies, rules
        & regulations and implement the library policies in a judicious manner.
        Overall, the Library Advisory Committee addresses issues, problems and
        concerns related to the library and makes recommendations to the
        management on library related matters.{" "}
      </p>

      <div className="overflow-x-auto">
        <table className="lg:mx-28 border border-white text-white w-full p-2 ">
          <thead>
            <tr>
              <th className={`border-2 border-white lg:p-3 p-1`}>Sl No.</th>
              <th className={`border-2 border-white lg:p-3 p-1`}>Members</th>
              <th className={`border-2 border-white lg:p-3 p-1`}>Department</th>
              <th className={`border-2 border-white lg:p-3 p-1`}>
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
                <td className={`border-2 border-white lg:p-3 p-1`}>
                  {item.SlNo}
                </td>
                <td className={`border-2 border-white lg:p-3 p-1`}>
                  {item.name}
                </td>
                <td className={`border-2 border-white lg:p-3 p-1`}>
                  {item.department}
                </td>
                <td className={`border-2 border-white lg:p-3 p-1`}>
                  {item.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p
        className={`py-4 pt-6 font-semibold text-lg text-center ${oswald.className}`}
      >
        Library staff profile:
      </p>
      <div className="overflow-x-auto">
        <table className="mx-auto w-3/4 border border-white text-white">
          <thead>
            <tr>
              <th className={`border-2 border-white lg:p-3 p-1`}>Name</th>
              <th className={`border-2 border-white lg:p-3 p-1`}>
                Qualification
              </th>
              <th className={`border-2 border-white lg:p-3 p-1`}>
                Designation
              </th>
              <th className={`border-2 border-white lg:p-3 p-1`}>
                Date of joining
              </th>
              <th className={`border-2 border-white lg:p-3 p-1`}>Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`border-2 border-white lg:p-3 p-1`}>
                Mr. K R KUMAR
              </td>
              <td className={`border-2 border-white lg:p-3 p-1`}>M.lisc</td>
              <td className={`border-2 border-white lg:p-3 p-1`}>Librarian</td>
              <td className={`border-2 border-white lg:p-3 p-1`}>02.06.2018</td>
              <td className={`border-2 border-white lg:p-3 p-1`}>8 years</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibraryPeople;
