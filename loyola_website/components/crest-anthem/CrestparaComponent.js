import React, { useEffect, useState } from 'react';
import Logo from '../../Assets/logo.png';
import Image from 'next/image';
const CrestparaComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);



  return (
    <>
    <h1 className="text-3xl text-center font-bold my-5  text-indigo-900" >
          <span className="font-bold text-yellow-600">THE COLLEGE </span> CREST
    </h1>
    <div className="bg-slate-300 flex items-center" >
    
        
      <p  className='text-justify text-black font-medium text-lg leading-relaxed w-3/4 mx-16'>The college crest has a rising sun that radiates  the letters "IHS" that are inscribed in the center. 
        This is the abbreviation of the name of Jesus   (which in Greek is written as IHUS).  The name symbolizes deepest faith in God, 
        commitment to humanity, and the readiness  to sacrifice one's life for others.  This is also the logo of the Jesuits. 
        On the right side is the rock which is a bed for two trees.  The rock signifies the necessity of a strong philosophical 
        foundation on which there are two trees which signify growth   and development. It also signifies ecological concerns. 
        The bottom of the crest has the picture of the fort that  belonged to the family of Ignatius of Loyola. 
        It reminds us of the inner transformation  St. Ignatius experienced in his life,  after which he renounced his ambitions 
        of knightly glory and dedicated himself to  love and serve humanity and establish His kingdom of justice. </p>    

      {isClient && (
        <div  className='w-1/4'>
          <Image src= {Logo.src} width={200} height={200} alt="Logo"  />
        </div>    
      )}

    </div>
    </>
  );
};

export default CrestparaComponent;
