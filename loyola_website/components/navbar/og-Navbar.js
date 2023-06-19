import React, { useState, useEffect } from "react";
import NavLogo from "./NavLogo";
import { Grenze_Gotisch, Pirata_One, Playfair_Display } from "next/font/google";
import styles from "../../styles/navbar.module.css";
import "../../styles/navbar.module.css";
import Link from "next/link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const headerFont = Pirata_One({ subsets: ["latin"], weight: "400" });
const smolheadFont = Playfair_Display({ subsets: ["latin"] });
// Main Navbar Component

//Navbar Logo Component
const NavLogoLink = () => {
  return (
    <>
      <Link href={"/"}>
        <NavLogo />
      </Link>
    </>
  );
};

//Navbar Primary Links Component
const NavLinks = () => {
  return (
    <div>
      <ul className="menu menu-horizontal px-1">
        <NavAbout />
        {/* <NavStudent />
        <NavAcads />
        <NavDepts />
        <NavNews />
        <NavAdmissions /> */}
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

const AboutSubMenu = () => {
  return (
    <ul className={`bg-white text-black z-10 ${styles.subMenu}`}>
      <li>
        <Link href={`/about/about-uni`}>About University</Link>
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
    </ul>
  );
};

const BurgerMenu = () => {
  return (  
      <>
        <MenuRoundedIcon className={`text-4xl sm:hidden text-gray-300`} />

      </>
  );
};

const OgNavbar = () => {
  return (
    <>
      <nav
        className={`flex flex-row items-center justify-between p-2 bg-gradient-to-tr from-cyan-600 to-blue-800 `}
      >
        <NavLogoLink />
        {/* <NavLinks /> */}
        <BurgerMenu/>
      </nav>
    </>
  );
};
export default OgNavbar;
