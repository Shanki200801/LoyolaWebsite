import * as React from 'react';
import { Josefin_Sans, Aclonica } from 'next/font/google';

const placementHead = Aclonica({subsets:['latin'], weight: '400'});
const overviewBody = Josefin_Sans({subsets:['latin']});

const Placements = ()=>{
    return (
        <div className='bg-white text-black'>
            <PlacementHeader/>
            <h2>Training programs</h2>
            <p>Along with academics the Placement cells aims in promoting employability integrated training programs
             for students of LDC. The Placement cell in association with TNS India foundation, Magic bus foundation 
             and Hope foundation has organized various training programs both online and offline, the training modules
              covered soft skills for employability, quantitative aptitude and logical reasoning, verbal aptitude,
               resume building, communication, personality development, interview etiquettes, corporate linkage sessions
                and mock interviews. Alongside the training curriculum to students of LDC special assistance to certificate 
                course like Tally ERP 9 and Microsoft office – Excel. Placement Cell also helps students interested in 
                aspiring to crack different competitive examinations such as UPSC, SSC and Bank PO.
            </p>
            <h3>Recent training programs conducted</h3>
            <ul>
                <li>In association with TNS India foundation – Future skills program LMS – Ms. Mary </li>
                <li>In association with Magic bus foundation – Ms. Soumya, Ms. Prathyusha, Mr. Naveen and Mr. Chandra Mohan </li>
                <li>In association Hope foundation – Sis Jessy and Mr. Manjunath </li>
            </ul>
            <h2>Talks & Guest lecture </h2>
            <p>Cognitive interactions are the best way to mould student’s understanding on different topics and
             recent socio-economic trends, so to increase the awareness among students talks and guest lectures 
             by eminent individuals from different walks of life is regular feature in our campus. The main aim 
             of these series of talks is to broaden the perspectives of students in understanding all possible
              career opportunities they can fit themselves and choosing the right career path on completion of
               the studies. </p>
            <h2>Recent activities conducted from Placement cell of LDC</h2>
            <ul>
                <li>“NAVIGATION ‘23” (Know where you belong) – Career guidance session for final year BCOM students
                 was conducted on Feb 20, 2023. Specially topics such as Job opportunities after graduation, 
                 opportunities to pursue higher studies and preparation for UPSC - civil service exam was covered. 
                 The resource persons for the program were Prof Teena Maria Rani and Prof Grace Prerana from school of business, 
                 St Joseph’s University. </li>
                <li>Vijay Karnataka the largest read daily in Karnataka in association with Gillette India conducted
                 a career guidance session for final year students of BCOM and BA on Feb 27, 2023. Special focus to 
                 opportunities in the area of communication and media covered. Mr. Sandeep the regional head was accompanied
                  by Mr. Kishore and Ms. Chandni. </li>
            </ul>
            <h2>Placement Process</h2>
            <p>All the students of the final year batch are eligible to apply for campus placements.</p>
            <ul>
                <li>Steps 1: Registering for employability integrated training program with placement cell</li>
                <li>Step 2: Active participation and completion of assessments from the training modules with 90% results
                 & 75% of attendance in all the placement activities will be the minimum eligibility to sit for campus placements </li>
                <li>Step 3: Submit a copy of training certificate with name and registration number </li>
                <li>Step 4: Release of eligibility list of students to seat for campus recruitment </li>
            </ul>
            <h2>Placement statistics </h2>
            <p>The academic year 2020 - 2021 was momentous for the placement cell of the Loyola degree college.
             A total number of 86 students were successfully placed in esteemed companies with annual CTC of 2.5 
             lakhs to 3 lakhs. In the Academic year 2021 – 2022 more than 90% of the students have opted for higher
              studies and have admitted themselves for post-graduation in commerce and arts.
                On Dec 21, 2023 campus recruitment drive was organised with L & T financial services and along with students of LDC
                other students from St. Joseph’s university, Christ college, AMC college and Jain University addended the job drive 
                and were placed with 3 lakhs CTC.
                Some of our esteemed recruiters are L&T, ASTER Pharma, Edutech, HDFC bank, Capgemini and Nirvana and Navi finance. </p>
        </div>
    );
}

const PlacementHeader = ()=>{
    return (
        <div className='h-screen grid grid-cols-2 bg-gradient-to-tr from-red-700 to-black p-10'>
            <h1 className={`text-8xl justify-self-center self-center pb-20 text-white ${placementHead.className}`}>PLACEMENTS</h1>
            <div id="header-box" className='w-5/6 justify-self-center self-center'>
            <div className={`text-3xl text-amber-100 bg-gradient-to-tr from-orange-400 via-orange-600 to-orange-700 shadow-2xl p-10 ${overviewBody.className} `}>
                <p>Placement cell of Loyola Degree College aims in equipping every student to be industry ready by offering 
placement training programs that are specially designed by keeping in mind the presents requirement of Job market.</p>
                <p className='text-base mt-5'>A series of guest lectures and career guidance sessions are conducted to broaden the perspectives of students in
  making them understand where they exactly fit. The placement cell provides both on campus and off campus placements
   assistance to the students.</p>
  </div>
   
            </div>
            
        </div>
    );
}

export default Placements;