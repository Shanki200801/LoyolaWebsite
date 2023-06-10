import * as React from 'react';
import {Special_Elite, Ruda} from 'next/font/google';
import excel from '../../Assets/excel.webp'
import finGrowth from '../../Assets/finGrowth.webp'
import Image from 'next/image';

const specialElite = Special_Elite({ subsets: ['latin'], weight: '400' });
const ruda = Ruda({subsets: ['latin']});

const BCom = ()=>{
    return (
        <div className="bg-white" >
            <h1 className={`flex justify-center pt-10 text-black text-6xl ${specialElite.className}`}>Bachelor of Commerce (BCom)</h1>
            <div className={`grid grid-cols-2 grid-rows-2 ${ruda.className} gap-12`}>
                <Overview/>
                <Image src={finGrowth} className='h-60 w-4/5 object-cover mt-14 rounded-2xl'/>
                <Image src={excel} className='h-60 w-4/5 object-cover mt-5 rounded-2xl justify-self-end'/>
                <Eligibility/>
            </div>
            <div id="buttons" className='flex justify-center gap-20 mt-14 pb-10'>
                <BComFacultyBtn/>
                <ApplyBtn/>
            </div>
               
        </div>
    )
}

const Overview = ()=>{
    return(
        <div id="overview" className={`bg-gradient-to-br from-green-600 to-green-700 text-white text-lg ml-16 mt-14 w-4/5 row-span-1 text-center rounded-2xl h-60 py-5 px-14 ${ruda.className} justify-self-end`}>
                <h2 className='text-3xl underline underline-offset-8'>OVERVIEW</h2>
            <p className='mt-6  '>B.Com or Bachelor of Commerce is an undergraduate 4-year full time degree program that
             provides educational expertise in the commerce stream. </p>
            </div>
    );
}

const Eligibility = ()=>{

    return (
        <div id="eligibility" className=' bg-gradient-to-tl from-green-600 to-green-700 text-white text-lg mr-16 mt-5 w-4/5 row-span-1 flex items-center flex-col rounded-2xl h-60 py-5 px-14 justify-self-start'>
            
             <h2 className='text-3xl underline underline-offset-8'>ELIGIBILITY</h2>
                <p className='mt-6'>Students who studied commerce as the main subject in 12th standard of schooling can opt.
                 Also students who have taken Business Studies and Accountancy in PUC or equivalent 12th std examinations are eligible to apply.
                  Science students with Mathematics are also eligible.  </p> 
            </div>
    );
}

const BComFacultyBtn = ()=>{
    return (
        <div id="faculty-btn">
            <a href="#_" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-blue-900 transition-colors duration-300 ease-out border-2 border-blue-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Faculty</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-blue-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>
        </div>
    );
}

const ApplyBtn = ()=>{
    return (
        <div id="apply-btn">
            <a href="#_" className="relative inline-flex items-center justify-start py-3.5 pl-4 pr-12 overflow-hidden font-semibold text-blue-900 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-900 group-hover:h-full"></span>
<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Apply Now</span>
</a>
        </div>
    );
}
export default BCom;