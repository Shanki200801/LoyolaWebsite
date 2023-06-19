import React from 'react';
import Logo from '../../public/about/ldcLogo.webp';
import Image from 'next/image';
import styles from "../../styles/navbar.module.css";
import "../../styles/navbar.module.css";
import { Grenze_Gotisch, Pirata_One, Playfair_Display } from 'next/font/google';

const headerFont = Pirata_One({subsets: ['latin'], weight: '400'})
const smolheadFont = Playfair_Display({subsets: ['latin']})
const NavLogo = () => {
  return (
    <div className="flex flex-row items-center text-white">
      <Image src={Logo} className={`h-auto w-[12%] lg:w-[10%]`} alt="college logo"/>
      <div className={`hidden md:flex md:flex-col md:items-center`}>
        <h1 className={`text-3xl font-bold px-2 ${headerFont.className}`}>Loyola Degree College</h1>
        <h2 className={`text-sm font-light px-2 ${smolheadFont.className}`}>Affiliated to Bangalore University</h2>
      </div>
    </div>
  )
};

export default NavLogo;