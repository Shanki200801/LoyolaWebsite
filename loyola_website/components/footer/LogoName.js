import React from 'react';
import Logo from '../../Assets/logo.png';
import Image from 'next/image';

const LogoName = () => {
  return (
    <div className="flex flex-row items-center p-4">
      <Image src={Logo} height={100} width={100}/>
      <div className= "flex flex-col items-center">
        <h1 className="text-xl font-bold px-2 uppercase">Loyola Degree College</h1>
        <h2 className="text-m font-light px-2 ">Affiliated to Bangalore University</h2>
      </div>
    </div>
  )
};

export default LogoName;  