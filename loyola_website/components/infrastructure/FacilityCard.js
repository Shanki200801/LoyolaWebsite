import React from 'react'
import Image from 'next/image'


const FacilityCard = ({image, title, description}) => {
  return (
    <div className='my-12 flex flex-row'>
        <div className='w-1/4 '>
            <Image src={image} alt="infrastructure" width={275} height={275}  className='mx-auto'  />
        </div>
        <div className='w-3/4 px-auto my-auto'>
            <h3 className='text-lg font-bold text-black mb-2'>{title}</h3>
            <p className='text-gray-600'>{description}</p>
        </div>
    </div>
  )
}

export default FacilityCard