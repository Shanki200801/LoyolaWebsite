import * as React from "react";
import { Inter, Oswald, Lobster_Two } from "next/font/google";

const mainHeading = Lobster_Two({ subsets: ["latin"], weight: "400" });
const generalHeaders = Oswald({ subsets: ["latin"] });
const generalText = Inter({ subsets: ["latin"] });

const Management = () => {
  const staffCouncilMembers = [
    {
      designation: "Chairman",
      name: "Rev Dr Fr Alphonse Pius Fernandes SJ",
    },
    {
      designation: "Finance Officer",
      name: "Rev Fr Denzil Lobo SJ",
    },
    {
      designation: "Vice-Principal",
      name: "Dr Vincent A",
    },
    {
      designation: "Placement Officer ",
      name: "Mr D. Joshua",
    },
    {
      designation: "Dean of Commerce",
      name: "Dr Rajesh M V",
    },
    {
      designation: "Dean of Arts",
      name: "Dr Kumaraswamy B E",
    },
    {
      designation: "Heads of the Departments",
      name: "Ms Swetha Wenona Suvarna",
    },
    {
      designation: "",
      name: "Ms Rowena K ",
    },
    {
      designation: "",
      name: "Dr Kumaraswamy B E ",
    },
    {
      designation: "",
      name: "Dr Tara V Nair ",
    },
    {
      designation: "",
      name: "Mr Lazarus Lepcha ",
    },
    {
      designation: "",
      name: "Mr Vignesh G ",
    },
    {
      designation: "",
      name: "Fr Pratap Chandru SJ ",
    },
    {
      designation: "Staff Council Secretary ",
      name: "Ms Maria Thejeswini B",
    },
    {
      designation: "IQAC Coordinator",
      name: "Ms Swetha Wenona Suvarna",
    },
    {
      designation: "NAAC Coordinator",
      name: "Mr Vignesh G",
    },
    {
      designation: "Librarian",
      name: "Mr K R Kumar",
    },
    {
      designation: "Office Superintendent",
      name: "Ms Lavina Philomena Rodrigues ",
    },
  ];

  const campusMinistry = [
    {
      designation: "Coordinator",
      name: "Fr Pratap Chandru SJ ",
    },
    {
      designation: "Members",
      name: "Rev Dr Alphonse Pius Fernandes SJ",
    },
    {
      designation: "",
      name: "Dr Vincent A",
    },
    {
      designation: "",
      name: "Mr Calvin George Michael",
    },
    {
      designation: "",
      name: "Mr D Joshua",
    },
    {
      designation: "",
      name: "Ms Dorita Maria Saldanha",
    },
  ];

  return (
    <main
      className={`bg-white pb-10 bg-cover bg-[url('~/public/backgrounds/bgTwo.webp')] bg-center bg-fixed`}
    >
      <div className={`bg-green-200/80`}>
        <h1
          className={`text-black row-span-4 custom-letter-spacing-wider py-5 text-5xl text-center ${mainHeading.className} sm:text-5xl lg:text-6xl  xl:text-7xl xl:pb-0`}
        >
          Management
        </h1>
        <AdminTable />
        <StaffMinistryTable
          details={staffCouncilMembers}
          left={false}
          right={true}
          topRight={true}
          heading="The Staff Council"
        />
        <StaffMinistryTable
          details={campusMinistry}
          left={true}
          right={false}
          topRight={false}
          heading="Campus Ministry"
        />
      </div>
    </main>
  );
};

const AdminTable = () => {
  const adminMembers = [
    {
      name: "Rev Fr Dionysius Gerald Vas SJ",
      qualification: "MA",
      designation: "Provincial & President, BJES",
    },
    {
      name: "Rev Fr Brian Pereira SJ",
      qualification: "MSc",
      designation: "Vice-President, BJES ",
    },
    {
      name: "Rev Fr Anthony Joseph SJ",
      qualification: "MA",
      designation: "Rector",
    },
    {
      name: "Rev Dr Fr Alphonse Pius Fernandes SJ",
      qualification: "MA, PhD",
      designation: "Principal",
    },
    {
      name: "Dr Vincent A",
      qualification: "MA, MED, PhD",
      designation: "Vice-Principal",
    },
  ];

  return (
    <section
      className={` px-3 lg:mx-32 lg:grid lg:grid-cols-2 lg:mt-16 lg:p-5 lg:rounded-xl lg:gap-5 bg-gradient-to-tl lg:from-green-500 lg:to-emerald-800`}
    >
      <div
        className={`${generalHeaders.className} underline underline-offset-auto lg:no-underline text-center text-3xl lg:text-7xl xl:text-8xl lg:justify-self-center lg:self-center text-black lg:text-white`}
      >
        Administration
      </div>
      <div
        className={` ${generalText.className} mt-5 lg:mt-0 relative overflow-x-auto shadow-md rounded-lg`}
      >
        <table className="w-full text-xs xl:text-base text-left text-white ">
          <thead className="text-xs xl:text-base text-white uppercase bg-indigo-700">
            <tr>
              <th scope="col" className="px-4 lg:px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-4 lg:px-6 py-3">
                Qualification
              </th>
              <th scope="col" className="px-4 lg:px-6 py-3">
                Designation
              </th>
            </tr>
          </thead>
          <tbody>
            {adminMembers.map((item, index) => {
              return (
                <tr className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                  <td
                    scope="row"
                    className="px-4 lg:px-6 py-4 font-medium text-white"
                  >
                    {item.name}
                  </td>
                  <td className="px-4 lg:px-6 py-4">{item.qualification}</td>
                  <td className="px-4 lg:px-6 py-4">{item.designation}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const StaffMinistryTable = (props) => {
  return (
    <section
      className={` px-3 lg:mx-32 lg:grid lg:grid-cols-2 lg:mt-16 lg:p-5 lg:rounded-xl lg:gap-5 bg-gradient-to-${
        props.topRight ? `tr` : `tl`
      } lg:from-green-500 lg:to-emerald-800 text-black lg:text-white`}
    >
      {props.left && (
        <div
          className={`${generalHeaders.className} hidden lg:block lg:text-8xl lg:justify-self-center lg:self-center lg:text-center `}
        >
          <p>Campus</p>
          <p>Ministry</p>
        </div>
      )}
      <div
        className={`${generalHeaders.className} mt-5 underline underline-offset-auto text-center text-3xl text-black lg:hidden`}
      >
        {props.heading}
      </div>
      <div
        className={` ${generalText.className} mt-5 lg:mt-0 relative overflow-x-auto shadow-md rounded-lg`}
      >
        <table className="w-full text-xs xl:text-base text-left text-white ">
          <thead className="text-xs xl:text-base text-white uppercase bg-indigo-700 ">
            <tr>
              <th scope="col" className="px-4 lg:px-6 py-3">
                Designation
              </th>
              <th scope="col" className="px-4 lg:px-6 py-3">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {props.details.map((item, index) => {
              return (
                <tr className=" border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                  <td
                    scope="row"
                    className="px-4 lg:px-6 py-4 font-medium text-white"
                  >
                    {item.designation}
                  </td>
                  <td className="px-4 lg:px-6 py-4">{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {props.right && (
        <div
          className={`${generalHeaders.className} hidden lg:block lg:text-8xl lg:justify-self-center lg:self-center lg:text-center`}
        >
          <p>The Staff</p>
          <p>Council</p>
        </div>
      )}
    </section>
  );
};

export default Management;
