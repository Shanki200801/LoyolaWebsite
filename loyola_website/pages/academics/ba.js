import * as React from 'react';

const BA = ()=>{
    return (
        <div className="bg-white h-screen" >
            <h1 className="flex justify-center pt-10 text-black text-6xl">Bachelor of Arts (BA)</h1>
            <div className='grid grid-cols-2 grid-rows-2'>
                <Eligibility/>
                <Offerings/>
            </div>
            <div id="buttons" className='flex justify-center'>
                <button id="ba-faculty" >Faculty</button>
                <button id="ba-admission-redirect">Apply Now</button>
            </div>
               
        </div>
    )
}

const Eligibility = ()=>{
    return(
        <div id="eligibility" className='bg-amber-400 text-black text-lg ml-16 mt-14 w-2/5 col-span-2 row-span-1 text-center rounded-2xl h-60'>
                <h2 className='text-3xl underline underline-offset-8'>Eligibility</h2>
                <p>A Candidate for the BA Degree Courses shall have passed the Pre
                 – University Examination with any combination of subjects, or equivalent 
                 is 12th standard examination of any Other Board. </p>
            </div>
    );
}

const Offerings = ()=>{

    return (
        <div id="offerings" className='bg-amber-500 text-black text-lg mr-16 mt-5 w-2/5 justify-self-end  col-span-2 row-span-1 flex items-center flex-col rounded-2xl h-60'>
            <h2 className='text-3xl underline underline-offset-8'>BA Courses</h2>
            <ul>
                <li>BA Journalism, Psychology</li>
                <li>BA Journalism, Political Science</li>
            </ul>  
            </div>
    );
}

export default BA;