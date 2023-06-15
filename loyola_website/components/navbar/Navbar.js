import React, { useState, useEffect } from "react";
import NavLogo from "./NavLogo";

import styles from "../../styles/navbar.module.css";
import "../../styles/navbar.module.css";
import Link from "next/link";

// Main Navbar Component

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if(currentScrollPos > prevScrollPos){
          setVisible(false)
      }else{
          setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
      console.log(visible);
  }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

  return (

    <div className={`navbar bg-navbar-theme text-white sticky z-20 p-4   ${visible ? 'top-0': ''}`}>
      <NavLogoLink />
      <NavLinks />

    </div>
  );
};

//Navbar Sub-components//

//Navbar Logo Component
const NavLogoLink = () => {
  return (
    <div className="flex-1">
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
        <NavAcads/> 
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
      <a className={`hover:underline hover:underline-offset-4 hover:decoration-white bg-transparent uppercase ${styles.primaryLinks}`}>
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
        <a>About University</a>
      </li>
      <li>
        <a>Vision & Mission</a>
      </li>
      <li>
        <a>Crest & Anthem</a>
      </li>
      <li>
        <a>Core Values</a>
      </li>
      <li>
        <a>Management</a>
      </li>
    </ul>
  );
};

//Navbar Student Component
const NavStudent = () => {
  return (
    <li>
      <a className={`hover:underline hover:underline-offset-4 hover: decoration-white bg-transparent uppercase ${styles.primaryLinks}`}>
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
      {/* <li>
        <a>Rules & Regulations</a>
      </li>
      <li>
        <a>Note to parents</a>
      </li> */}
      <li>
        <Link href={`/student/associations`}>Associations</Link>
      </li>
      <li>
        <a>Scholarships</a>
      </li>
      <li>
        <Link href={`/student/placements`}>Placements</Link>
      </li>
    </ul>
  );
};

//Navbar Academics Component
const NavAcads = () => {
  return (
    <li>
      <a className={`hover:underline hover:underline-offset-4 hover: decoration-white bg-transparent uppercase ${styles.primaryLinks}`}>
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
    <ul className={`bg-white text-black z-10 ${styles.subMenu} ${styles.acadsMenu}`}>
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

//Navbar Departments Component
const NavDepts = () => {
  return (
    <li>
      <Link href={"/departments"}  className={`hover:underline hover:underline-offset-4 hover: decoration-white bg-transparent uppercase ${styles.primaryLinks}`}>
        Departments
        {/* <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg> */}
      </Link>
      {/* <DeptSubMenu /> */}
    </li>
  );
};

//Navbar Departments Menu Component
const DeptSubMenu = () => {
  return (
    <ul className={`bg-white text-black z-10 ${styles.subMenu} ${styles.deptMenu}`}>
      <li>
        <a>Department of Commerce</a>
      </li>
      <li>
        <a>Department of English</a>
      </li>
      <li>
        <a>Department of Kannada</a>
      </li>
      <li>
        <a>Department of Hindi</a>
      </li>
      <li>
        <a>Department of Physical Education</a>
      </li>
      <li>
        <a>Department of Psychology</a>
      </li>
      <li>
        <a>Department of Political Science</a>
      </li>
      <li>
        <a>Department of Journalism</a>
      </li>
    </ul>
  );
};

//Navbar News Component
const NavNews = () => {
  return (
    <li>
      <Link href={"/news_events"} className={`hover:underline hover:underline-offset-4 hover: decoration-white bg-transparent uppercase ${styles.primaryLinks}`}>
        News & Events
      </Link>
    </li>
  );
};

//Navbar Admissions Component
const NavAdmissions = () => {
  return (
    <li>
      <a className={`hover:bg-white uppercase font-black ${styles.admissionsBtn} ${styles.primaryLinks}`}>
        Admissions
      </a>
    </li>
  );
};

export default Navbar;
