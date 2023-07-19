import React, { useState, useEffect } from "react";
import NavLogo from "./NavLogo";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import "../../styles/navbar.module.css";

// Main Navbar Component

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
    console.log(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      {/* // laptop navbar */}
      <div
        className={`navbar bg-navbar-theme text-white sticky z-20 p-4 hidden lg:flex  ${
          visible ? "top-0" : ""
        }`}
      >
        <NavLogoLink />
        <NavLinks />
      </div>

      {/* Mobile nav bar  */}
      <div
        className={`flex items-center justify-center bg-navbar-theme text-white w-full z-20 p-4 lg:hidden  `}
      >
        <a href="/">
          <NavLogo />
        </a>
        <div className="absolute left-2">
          <SideBar />
        </div>
      </div>
    </>
  );
};

//Navbar Sub-components//

//Navbar Logo Component
const NavLogoLink = () => {
  return (
    <div className="lg:flex-1">
      <Link href={"/"}>
        <NavLogo />
      </Link>
    </div>
  );
};

//Navbar Primary Links Component
const NavLinks = () => {
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <NavAbout />
        <NavStudent />
        <NavAcads />
        <NavInfra />
        <NavDepts />
        <NavNews />
        <NavAdmissions />
      </ul>
    </div>
  );
};

//Navbar About Component
const NavAbout = () => {
  return (
    <li tabIndex={0}>
      <a
        className={`hover:underline hover:underline-offset-4 hover:decoration-white bg-transparent uppercase ${styles.primaryLinks}`}
      >
        About
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </a>
      <AboutSubMenu />
    </li>
  );
};

//Navbar About Menu Component
const AboutSubMenu = () => {
  return (
    <ul className={`bg-white text-black z-10 ${styles.subMenu}`}>
      <li>
        <Link href={`/about/about-college`}>About College</Link>
      </li>
      <li>
        <Link href={`/about/vision-mission`}>Vision & Mission</Link>
      </li>
      <li>
        <Link href={`/about/crest-anthem`}>Crest & Anthem</Link>
      </li>
      <li>
        <Link href={`/about/core-values`}>Core Values</Link>
      </li>
      <li>
        <Link href={`/about/management`}>Management</Link>
      </li>
    </ul>
  );
};

//Navbar Student Component
const NavStudent = () => {
  return (
    <li>
      <a
        className={`hover:underline hover:underline-offset-4 hover: decoration-white bg-transparent uppercase ${styles.primaryLinks}`}
      >
        Student
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </a>
      <StudentSubMenu />
    </li>
  );
};

//Navbar Student Menu Component
const StudentSubMenu = () => {
  return (
    <ul className={`bg-white text-black z-10 ${styles.subMenu}`}>
      <li>
        <Link href={`/student/associations`}>Associations</Link>
      </li>
      <li>
        <Link href={`/student/placements`}>Placements</Link>
      </li>
      <li>
        <Link href={`/student/grievances`}>Grievances</Link>
      </li>
      <li>
        <Link href={`/student/student-council`}>Student Council</Link>
      </li>
      <li>
        <Link href={`/student/student-achievements`}>Student Achievements</Link>
      </li>
    </ul>
  );
};

//Navbar Academics Component
const NavAcads = () => {
  return (
    <li>
      <a
        className={`hover:underline hover:underline-offset-4 hover: decoration-white bg-transparent uppercase ${styles.primaryLinks}`}
      >
        Academics
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </a>
      <AcadsSubMenu />
    </li>
  );
};

//Navbar Academics Menu Component
const AcadsSubMenu = () => {
  return (
    <ul
      className={`bg-white text-black z-10 ${styles.subMenu} ${styles.acadsMenu}`}
    >
      <li>
        <Link href={`/academics/ba`}>B.A.</Link>
      </li>
      <li>
        <Link href={`/academics/bcom`}>B.Com</Link>
      </li>
      <li>
        <Link href={`/academics/certificate-courses`}>Study Of Languages</Link>
      </li>
      <li>
        <Link href={`/academics/certificate-courses`}>Certificate Courses</Link>
      </li>
      <li>
        <Link href={`/academics/exam-results`}>Examination Results</Link>
      </li>
    </ul>
  );
};

const NavInfra = () => {
  return (
    <li>
      <a
        className={`hover:underline hover:underline-offset-4 hover: decoration-white bg-transparent uppercase ${styles.primaryLinks}`}
      >
        Infrastructure
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </a>
      <InfraSubMenu />
    </li>
  );
};

const InfraSubMenu = () => {
  return (
    <ul
      className={`bg-white text-black z-10 ${styles.subMenu} ${styles.acadsMenu}`}
    >
      <li>
        <Link href={"/infrastructure/facilities"}>Facilities</Link>
      </li>
      <li>
        <Link href={"/infrastructure/library"}>Library</Link>
      </li>
      <li>
        <Link href={"/infrastructure/sports"}>Sports</Link>
      </li>
    </ul>
  );
};

//Navbar Departments Component
const NavDepts = () => {
  return (
    <li>
      <Link
        href={"/departments"}
        className={`hover:underline hover:underline-offset-4 hover: decoration-white bg-transparent uppercase ${styles.primaryLinks}`}
      >
        Departments
      </Link>
    </li>
  );
};

//Navbar News Component
const NavNews = () => {
  return (
    <li>
      <Link
        href={"/news_events"}
        className={`hover:underline hover:underline-offset-4 hover: decoration-white bg-transparent uppercase ${styles.primaryLinks}`}
      >
        News & Events
      </Link>
    </li>
  );
};

//Navbar Admissions Component
const NavAdmissions = () => {
  return (
    <li>
      <Link
        href="/admissions"
        className={`hover:bg-white uppercase font-black ${styles.admissionsBtn} ${styles.primaryLinks}`}
      >
        Admissions
      </Link>
    </li>
  );
};

const SideBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [AboutSidebarOpen, setAboutSidebarOpen] = useState(false);
  const [StudentSidebarOpen, setStudentSidebarOpen] = useState(false);
  const [AcademicsSidebarOpen, setAcademicsSidebarOpen] = useState(false);
  const [InfraSidebarOpen, setInfraSidebarOpen] = useState(false);
  return (
    <div>
      {/* open sidebar button  */}
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>
        <MenuIcon />
      </button>

      <div
        className={`${
          sidebarOpen ? "absolute" : "hidden"
        } -left-2 -top-7  z-20 w-screen`}
      >
        <div className="flex flex-col w-1/2 h-screen fixed bg-navbar-theme">
          {/* close menu button inside the sidebar  */}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="">
            <MenuOpenIcon />
          </button>
          {/* About menu inside the sidebar */}
          <div
            className="flex justify-between px-5 py-2 border-b-1 border-blue-400 border-solid "
            onClick={() => setAboutSidebarOpen(!AboutSidebarOpen)}
          >
            <span>About</span>
            {AboutSidebarOpen ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </div>
          {/* Submenu of about  */}
          {AboutSidebarOpen && (
            <div className="flex flex-col px-7">
              <Link href="/about/about-college" className="py-1">
                About College
              </Link>
              <Link href="/about/vision-mission" className="py-1">
                Vision and Mission
              </Link>
              <Link href="/about/crest-anthem" className="py-1">
                Crest and Anthem
              </Link>
              <Link href="/about/core-values" className="py-1">
                Core Values
              </Link>
              <Link href="/about/management" className="py-1">
                Management
              </Link>
            </div>
          )}
          {/* Student menu inside the sidebar */}
          <div
            className="flex justify-between px-5 py-2 "
            onClick={() => setStudentSidebarOpen(!StudentSidebarOpen)}
          >
            <span>Student</span>
            {StudentSidebarOpen ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </div>
          {/* Submenu of Student  */}
          {StudentSidebarOpen && (
            <div className="flex flex-col px-7">
              <Link href="/student/associations" className="py-1">
                Associations
              </Link>
              <Link href="/student/placements" className="py-1">
                Placements
              </Link>
              <Link href="/student/grievances" className="py-1">
                Grievances
              </Link>
              <Link href="/student/student-council" className="py-1">
                Student Council
              </Link>
              <Link href="/student/student-achievements" className="py-1">
                Student Achievements
              </Link>
            </div>
          )}{" "}
          {/* Academics menu inside the sidebar */}
          <div
            className="flex justify-between px-5 py-2 "
            onClick={() => setAcademicsSidebarOpen(!AcademicsSidebarOpen)}
          >
            <span>Academics</span>
            {AcademicsSidebarOpen ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </div>
          {/* Submenu of academics  */}
          {AcademicsSidebarOpen && (
            <div className="flex flex-col px-7">
              <Link href="/academics/ba" className="py-1">
                B.A.
              </Link>
              <Link href="/academics/bcom" className="py-1">
                B. Com
              </Link>
              <Link href="/academics/certificate-courses" className="py-1">
                Study of Languages
              </Link>
              <Link href="/academics/certificate-courses" className="py-1">
                Certificate Courses
              </Link>
              <Link href="/academics/exam-results" className="py-1">
                Examination results
              </Link>
            </div>
          )}{" "}
          {/* Infrastructure menu inside the sidebar */}
          <div
            className="flex justify-between px-5 py-2 "
            onClick={() => setInfraSidebarOpen(!InfraSidebarOpen)}
          >
            <span>Infrastructure</span>
            {InfraSidebarOpen ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </div>
          {/* Submenu of Infrastructure  */}
          {InfraSidebarOpen && (
            <div className="flex flex-col px-7">
              <Link href="/infrastructure/facilities" className="py-1">
                Facilities
              </Link>
              <Link href="/infrastructure/library" className="py-1">
                Library
              </Link>
              <Link href="/infrastructure/sports" className="py-1">
                Sports
              </Link>
            </div>
          )}
          {/* Departments menu inside the sidebar */}
          <div className="flex justify-between px-5 py-2 ">
            <Link href="/departments">Departments</Link>
          </div>
          {/* News and events menu inside the sidebar */}
          <div className="flex justify-between px-5 py-2 ">
            <Link href="/news_events">News and events</Link>
          </div>
          {/* Admissions menu inside the sidebar */}
          <div className="flex justify-between px-5 py-2 rounded bg-blue-300 mx-8 my-2 text-center text-navbar-theme ">
            <Link href="/admissions" className="text-lg font-bold">
              Admissions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
