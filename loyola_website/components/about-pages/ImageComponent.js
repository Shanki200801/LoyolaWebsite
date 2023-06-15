import React from 'react';
import Image from 'next/image';
import cover from "@/Assets/loyolacover.jpg";

const ImageComponent = () => {
  return (
    <div className='w-full'>
      <Image
        src={cover}
        alt="Top Image"
        fill='true'
        className='w-full'
      />
    </div>
  );
};

export default ImageComponent;
