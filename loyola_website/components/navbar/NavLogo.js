import React from 'react';
import Logo from '../../Assets/logo.png';
import Image from 'next/image';
import styles from "../../styles/navbar.module.css";
import "../../styles/navbar.module.css";

const NavLogo = () => {
  return (
    <div className="flex flex-row items-center font-playfair">
      <Image src={Logo} height={30} width={70}/>
      <div className="flex flex-col items-center">
        <h1 className={`text-xl font-bold px-2 uppercase ${styles.logoLink}`}>Loyola Degree College</h1>
        <h2 className={`text-m font-light px-2 ${styles.logoLink}`}>Affiliated to Bangalore University</h2>
      </div>
    </div>
  )
};

export default NavLogo;