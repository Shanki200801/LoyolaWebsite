import React from 'react';
import Logo from '../../Assets/logo.png';
import Image from 'next/image';

const LogoName = () => {
  return (
    <div className="flex flex-row items-center">
      <Image src={Logo} height={100} width={100}/>
      <h1 className="text-2xl font-bold px-2">Loyola Degree College</h1>
    </div>
  )
};

export default LogoName;