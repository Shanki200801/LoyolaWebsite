import React from "react";
import Campus_facilities from "../../Assets/campus_facilities.jpg";
import Councilling from "../../Assets/councilling.jpg";
import Clubs_association from "../../Assets/clubs.png";
import Scholarship from "../../Assets/scholarship.jpg";
import Mdmeals from "../../Assets/middaymeals.jpg";
import Student_council from "../../Assets/studentCouncil.jpg";
import Image from "next/image";
import Link from "next/link";
const SupportAssistance = () => {
  return (
    <div className=" bg-[url('http://loyolacollegeblr.com/images/bgg.png')] bg-cover py-4 text-white">
      <h2 className="text-2xl font-bold my-2 text-center">
        <span className="text-yellow-600">Support</span> and Assistance
      </h2>
      <h3 className="text-m font-thin mb-2 lg:px-40 px-8 text-center">
        Loyola degree college is sensitive to the changing needs of the student
        body and the teaching faculty. The encouragement of holistic development
        in students is echoed in the infrastructural facilities provided by the
        Institution as well as its policies.
      </h3>
      <NavGrid />
    </div>
  );
};

const NavGrid = () => {
  const icon_data = [
    {
      key: 1,
      name: "Campus Facilities",
      icon: Campus_facilities,
      link: "/infrastructure",
    },
    {
      key: 2,
      name: "Clubs and Associations",
      icon: Clubs_association,
      link: "/student/associations",
    },
    {
      key: 3,
      name: "Mid Day Meals",
      icon: Mdmeals,
      link: "",
    },
    {
      key: 4,
      name: "Scholarships",
      icon: Scholarship,
      link: "",
    },
    {
      key: 5,
      name: "Counselling",
      icon: Councilling,
      link: "/student/grievances",
    },

    {
      key: 6,
      name: "Student Council",
      icon: Student_council,
      link: "/student/student-council",
    },
  ];

  const grid_map = icon_data.map((icon) => (
    <Link
      href={icon.link}
      key={icon.key}
      className="flex flex-col items-center m-6 justify-center transition-transform duration-300 transform hover:-translate-y-1"
    >
      <Image
        src={icon.icon}
        height={50}
        width={50}
        alt="CampusFacilities"
        className="h-16 rounded-full image-full w-16 mb-2"
      />
      <div className="font-semibold">{icon.name}</div>
    </Link>
  ));
  return (
    <div className="grid grid-cols-3 gap-3 py-14 text-white">{grid_map}</div>
  );
};

export default SupportAssistance;
