import * as React from 'react';

const BA = ()=>{
    return (
        <div className="bg-white h-screen" >
            <h1 className="flex justify-center pt-10 text-black text-6xl">Bachelor of Arts (BA)</h1>
            <div id="eligibility">
                <h2>Eligibility</h2>
                <p>A Candidate for the BA Degree Courses shall have passed the Pre
                 – University Examination with any combination of subjects, or equivalent 
                 is 12th standard examination of any Other Board. </p>
            </div>
            <div id="offerings">
                <h2>BA Courses:</h2>
                <p>BA Journalism, Psychology</p>
                <p>BA Journalism, Political Science</p>
            </div>
            <button id="ba-faculty">Faculty</button>
            <button id="ba-admission-redirect">Apply Now</button>   
        </div>
    )
}

export default BA;