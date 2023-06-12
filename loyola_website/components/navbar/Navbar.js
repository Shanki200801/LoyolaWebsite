import React, { useState } from "react";
import NavLogo from "./NavLogo";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styles from "./navbar.module.css";
import "./navbar.module.css";
import Admissions from '../../pages/admissions';
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar bg-navbar-theme text-white sticky top-0 z-20">
      <div className="flex-1">
        <a><NavLogo/></a>
      </div>  
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">

        {/* About */}
        <li tabIndex={0}>
          <a className={styles.primaryLinks}>
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
            <ul className="bg-white text-black z-10">
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
                <a>Core Values - Aims/Objectives</a>
              </li>
              <li>
                <a>Management</a>
              </li>
            </ul>
          </li>

        {/* Student */}
        <li>
          <a className={styles.primaryLinks}>
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
            <ul className="bg-white text-black z-10">
              <li>
                <a>Rules & Regulations</a>
              </li>
              <li>
                <a>Note to parents</a>
              </li>
              <li>
                <a>Scholarships</a>
              </li>
              <li>
                <a>Placements</a>
              </li>
            </ul>
          </li>

          {/* Academics */}
          <li>
          <a className={styles.primaryLinks}>
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
            <ul className="bg-white text-black z-10">
              <li>
                <a>BA</a>
              </li>
              <li>
                <a>BCom</a>
              </li>
              <li>
                <a>Study Of Languages</a>
              </li>
              <li>
                <a>Cert Courses</a>
              </li>
              <li>
                <a>Examination Results</a>
              </li>
            </ul>
          </li>

          {/* Departments */}
          <li>
          <a className={styles.primaryLinks}>
              Departments
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
            <ul className="bg-white text-black z-10">
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
          </li>

          {/* News */}
          <li>
          <a className={styles.primaryLinks}>
              News & Events
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
            <ul className="bg-white text-black z-10">
              <li>
                <a>News</a>
              </li>
              <li>
                <a>Events</a>
              </li>
              <li>
                <a>Gallery</a>
              </li>
            </ul>
          </li>
          <li>
          {/* <a className={styles.primaryLinks} href="">
              Admissions
            </a> */}
            <Link href="/admissions" className={styles.primaryLinks}>
              Admissions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
