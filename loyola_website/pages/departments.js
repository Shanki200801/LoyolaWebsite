import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { useState } from 'react';
import ArtsStaff from '@/components/departments/ArtsStaff';
import CommerceStaff from '@/components/departments/CommerceStaff';
import ManagementStaff from '@/components/departments/ManagementStaff';
import LanguagesStaff from '@/components/departments/LanguagesStaff';
import NonTeaching from '@/components/departments/NonTeaching';
const departments = () => {
    const [departments, setDepartments] = useState('management');
  return (
    <>
    <div className='flex flex-col justify-center bg-slate-300'>
        <h1 className='text-4xl font-bold my-4 text-center text-slate-800 '>FACILITATORS</h1>
    <section>
        <div className='w-full my-4px text-white bg-navbar-theme'>
            <button onClick={() => setDepartments('management') } className='mx-4 py-1 hover:underline rounded-lg px-2'>Management</button>
            <button onClick={() => setDepartments('languages')} className='mx-4 py-1 hover:underline rounded-lg px-2 '>Languages</button>
            <button onClick={() => setDepartments('commerce')} className='mx-4 py-1 hover:underline rounded-lg px-2 '>Commerce</button>
            <button onClick={() => setDepartments('arts')} className='mx-4 py-1 hover:underline rounded-lg px-2 '>Arts</button>
            <button onClick={() => setDepartments('nonteaching')} className='mx-4 py-1 hover:underline rounded-lg px-2 '>Non-Teaching</button>
        </div>
    </section>
    
    <section className='mx-auto '>
        {departments == 'management' && <ManagementStaff/>}
        {departments == 'languages' && <LanguagesStaff/>}
        {departments == 'commerce' && <CommerceStaff/>}
        {departments == 'arts' && <ArtsStaff/>}
        {departments == 'nonteaching' && <NonTeaching/>}
    </section>
    </div>
    </>
  )
}

export default departments