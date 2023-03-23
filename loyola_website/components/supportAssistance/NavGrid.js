import React from 'react'
import Icon from '../../Assets/GitHub-Mark.png'
import Image from 'next/image'


const NavGrid = () => {

  const icon_data = [
        {
        name: 'Campus Facilities',
        icon: Icon,
        },
        {
          name: 'Clubs and Associations',
          icon: Icon,
        },
        {
          name: 'Mid Day Meals',
          icon: Icon,
        },
        {
          name: 'Scholarships',
          icon: Icon,
        },
        {
          name: 'Councilling',
          icon: Icon,
        },
        
        {
          name: 'Student Council',
          icon: Icon,
        }
    ] 

  const grid_map = icon_data.map((icon) =>
    <div className="flex flex-col items-center m-6 justify-center transition-transform duration-300 transform hover:-translate-y-1">
      <Image src={icon.icon} height={50} width={50} alt="CampusFacilities" className="h-16 w-16 mb-2" />
      <div className="font-semibold">{icon.name}</div>
    </div>
  ) 
  return (
    <div className="grid grid-cols-3 gap-3 py-14 text-white">
        {grid_map}
      </div>
  )
}

export default NavGrid