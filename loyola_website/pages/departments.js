import React from 'react';
import { useState, useEffect } from 'react';
import ArtsStaff from '@/components/departments/ArtsStaff';
import CommerceStaff from '@/components/departments/CommerceStaff';
import ManagementStaff from '@/components/departments/ManagementStaff';
import LanguagesStaff from '@/components/departments/LanguagesStaff';
import NonTeaching from '@/components/departments/NonTeaching';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const departments = ({staff_details}) => {
    console.log(staff_details)
    const [departments, setDepartments] = useState('management');
  return (
    <>
    <div className='flex flex-col justify-center bg-slate-300'>
        <h1 className='text-4xl font-bold my-4 text-center text-slate-800 '>FACILITATORS</h1>
    <div className='flex flex-row'>
    <section className= 'w-1/4'>
        <div className='w-full text-lg font-bold text mt-20 text-navbar-theme '>
            <button onClick={() => setDepartments('management') } className={`mx-4 py-1 hover:underline rounded-lg px-2 my-2 ${departments == 'management' ? 'bg-navbar-theme text-white' : 'text-navbar-theme'}`}>Management</button><br/>
            <button onClick={() => setDepartments('languages')} className={`mx-4 py-1 hover:underline rounded-lg px-2 my-2 ${departments == 'languages' ? 'bg-navbar-theme text-white' : 'text-navbar-theme'}`}>Department of Languages</button>
            <button onClick={() => setDepartments('commerce')} className={`mx-4 py-1 hover:underline rounded-lg px-2 my-2 ${departments == 'commerce' ? 'bg-navbar-theme text-white' : 'text-navbar-theme'}`}>Department of Commerce</button><br/>
            <button onClick={() => setDepartments('arts')} className={`mx-4 py-1 hover:underline rounded-lg px-2 my-2 ${departments == 'arts' ? 'bg-navbar-theme text-white' : 'text-navbar-theme'}`}>Department of Arts</button><br/>
            <button onClick={() => setDepartments('nonteaching')} className={`mx-4 py-1 hover:underline rounded-lg px-2 my-2 ${departments == 'nonteaching' ? 'bg-navbar-theme text-white' : 'text-navbar-theme'}`}>Non-Teaching Staff</button><br/>
        </div>
    </section>
    
    <section className='mx-auto '>
        {departments == 'management' && <ManagementStaff data={staff_details['management-staff']}/>}
        {departments == 'languages' && <LanguagesStaff data={staff_details['language-staff']} />}
        {departments == 'commerce' && <CommerceStaff data={staff_details['commerce-staff']}/>}
        {departments == 'arts' && <ArtsStaff data={staff_details['arts-staff']}/>}
        {departments == 'nonteaching' && <NonTeaching data={staff_details['nonteaching-staff']}/>}
    </section>
    </div>
    </div>
    </>
  )
}

export default departments


export async function getServerSideProps(){
    const staff_details = {
      'management-staff': '',
      'language-staff': '',
      'commerce-staff': '',
      'arts-staff': '',
      'nonteaching-staff': '',
    }
    for(let key in staff_details){
      staff_details[key] = await fetch(`http://localhost:3000/api/${key}`);
      staff_details[key] = await staff_details[key].json();
    }
   
    return {
      props: {staff_details}
    };
  }