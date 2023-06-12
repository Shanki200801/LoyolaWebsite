import React from 'react'
import StaffCard from './StaffCard'


const NonTeaching = () => {
  const staff = [
    {
      id: 1,
      profileimage: '/staff-photos/placeholder.png',
      name: 'MS PHILOMENA LAVINA RODRIGUES',
      designation: 'Office Superintendent',
      education: 'B COM',
      description: ''
    },
    {
        id: 2,
        profileimage: '/staff-photos/placeholder.png',
        name: 'MS ROCHELL RENITA D’SOUZA',
        designation: 'Administrative Staff',
        education: 'M A Economics',
        description: ''
      },
      {
        id: 3,
        profileimage: '/staff-photos/placeholder.png',
        name: 'MR ARUNODHAYAN',
        designation: 'Administrative Staff',
        education: 'B Com',
        description: ''
      },
      {
        id: 4,
        profileimage: '/staff-photos/placeholder.png',
        name: 'MR ANTHONY ARUN KUMAR',
        designation: 'Administrative Staff',
        education: 'M LISc',
        description: ''
      },
      {
        id: 5,
        profileimage: '/staff-photos/placeholder.png',
        name: 'MS STEPHY ANTHONY',
        designation: 'Administrative Staff',
        education: 'B Sc',
        description: ''
      },
      {
        id: 5,
        profileimage: '/staff-photos/placeholder.png',
        name: 'MR THOMAS P',
        designation: 'Support Staff',
        education: 'SSLC',
        description: ''
      },
      {
        id: 5,
        profileimage: '/staff-photos/placeholder.png',
        name: 'MR SANJOY JAMATIA',
        designation: 'Support Staff',
        education: 'Class VII',
        description: ''
      },
      {
        id: 6,
        profileimage: '/staff-photos/placeholder.png',
        name: 'MR YANKAPPA',
        designation: 'Support Staff',
        education: '',
        description: ''
      },


    
    
  ]

    
        return (
        <>
        
        {/* <div className='text-2xl text-center text-navbar-theme my-2'>NON TEACHING STAFF</div> */}
        
        <div className='grid grid-cols-2 gap-x-16 gap-y-6 place-content-center justify-evenly mt-8 mx-8'>
          
          {staff.map((staff) => {
            return <StaffCard key={staff.id} profileimage={staff.profileimage} name={staff.name} designation={staff.designation} education={staff.education} description={staff.description} />
          })}
        </div>
        </>
      )
}

export default NonTeaching