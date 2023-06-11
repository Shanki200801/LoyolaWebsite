import React from 'react'
import StaffCard from './StaffCard'


const ManagementStaff = () => {
    const staff = [
        {
          id: 1,
          profileimage: '/staff-photos/placeholder.png',
          name: 'MR VIGNESH',
          designation: 'Assistant Professor and HOD, Department of Political Science',
          education: 'M A, B Ed, PGDIT, KSET',
          description: 'Eight years of teaching experience that includes Assistant Professorship at St Aloysius College, Bengaluru.  Director of Mahatma Gandhi Study Centre.'
        },
        {
            id: 2,
            profileimage: '/staff-photos/placeholder.png',
            name: 'MR VIGNESH',
            designation: 'Assistant Professor and HOD, Department of Political Science',
            education: 'M A, B Ed, PGDIT, KSET',
            description: 'Eight years of teaching experience that includes Assistant Professorship at St Aloysius College, Bengaluru.  Director of Mahatma Gandhi Study Centre.'
          },
          {
            id: 3,
            profileimage: '/staff-photos/placeholder.png',
            name: 'MR VIGNESH',
            designation: 'Assistant Professor and HOD, Department of Political Science',
            education: 'M A, B Ed, PGDIT, KSET',
            description: 'Eight years of teaching experience that includes Assistant Professorship at St Aloysius College, Bengaluru.  Director of Mahatma Gandhi Study Centre.'
          },
          {
            id: 4,
            profileimage: '/staff-photos/placeholder.png',
            name: 'MR VIGNESH',
            designation: 'Assistant Professor and HOD, Department of Political Science',
            education: 'M A, B Ed, PGDIT, KSET',
            description: 'Eight years of teaching experience that includes Assistant Professorship at St Aloysius College, Bengaluru.  Director of Mahatma Gandhi Study Centre.'
          },
          {
            id: 5,
            profileimage: '/staff-photos/placeholder.png',
            name: 'MR VIGNESH',
            designation: 'Assistant Professor and HOD, Department of Political Science',
            education: 'M A, B Ed, PGDIT, KSET',
            description: 'Eight years of teaching experience that includes Assistant Professorship at St Aloysius College, Bengaluru.  Director of Mahatma Gandhi Study Centre.'
          },
    
        
        
      ]
    
        return (
        <>
        
        {/* <div className='text-2xl text-center text-navbar-theme my-2'>MANAGEMENT STAFF</div> */}
        
        <div className='grid grid-cols-2 gap-x-16 gap-y-6 place-content-center justify-evenly mt-8 mx-8'>
          
          {staff.map((staff) => {
            return <StaffCard key={staff.id} profileimage={staff.profileimage} name={staff.name} designation={staff.designation} education={staff.education} description={staff.description} />
          })}
        </div>
        </>
      )
}

export default ManagementStaff