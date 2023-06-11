import React from 'react'
import Image from 'next/image'

const StaffCard = ({profileimage, name, designation, education, description}) => {
  return (
    <>
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-14">
        <div className="flex justify-center md:justify-end -mt-16">
            <Image className="w-20 h-20 object-cover rounded-full border-2 border-navbar-theme" src={profileimage} alt={name}/>
        </div>
        <div>
            <h2 className="text-gray-800 text-3xl font-semibold">{name}</h2>
            <p className="mt-2 text-gray-800 text-2xl">{designation}</p>
            <p className='mt-2 text-gray-800 text-xl'>{education}</p>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
        
    </div>
    </>
  )
}

export default StaffCard