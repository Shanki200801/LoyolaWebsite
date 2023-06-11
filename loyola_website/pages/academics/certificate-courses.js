import * as React from 'react';
import Image from 'next/image';
import styles from '@/styles/cert-pg.module.css'
import finGrowth from '../../Assets/finGrowth.webp'
import excelLogo from '@/Assets/excelLogo.webp'
import tally from '@/Assets/tally.webp'
import photography from '@/public/academicsImg/photography.webp'
import { Lobster_Two, Nova_Cut } from 'next/font/google';

const kaushanScript = Lobster_Two({subsets: ['latin'], weight: '700'})
const novaCut = Nova_Cut({subsets: ['latin'], weight: '400'})


const Certificate = ()=>{
    return(
        <div className="bg-gradient-to-tr from-fuchsia-200 to-fuchsia-50" >
            <h2 className={`flex justify-center pt-10 text-black text-6xl ${kaushanScript.className}`}>Certificate Courses</h2>
            <div id="courses-group" className='grid grid-cols-3 mt-10'>
                <CertCard courseName="Tally ERP 9" className="justify-self-end" src={tally} bgGrad="bg-gradient-to-tr from-fuchsia-800 to-fuchsia-700"/>
                <CertCard courseName="Advanced Excel" className="justify-self-center" src={excelLogo} bgGrad="bg-gradient-to-tr from-red-800 to-red-500"/>
                <CertCard courseName="Photography" className="justify-self-start" src={photography} bgGrad="bg-gradient-to-tr from-fuchsia-800 to-fuchsia-700"/>
            </div>
            
            <h2 className={`flex justify-center pt-10 text-black text-6xl`}>Study of Languages</h2>
            <div>
            <LangCard lang="English"/>
            <LangCard lang="Kannada"/>
            <LangCard lang="Hindi"/>
            <LangCard lang="Tamil"/>
            <LangCard lang="Telugu"/>
            </div>
        </div>
    );
}

const CertCard = (props)=>{
    return(
        <div className={`group h-64 w-64 [perspective:1000px] ${props.className}`}>
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className={`absolute inset-0 h-full w-full rounded-xl ${props.bgGrad} px-12 text-center text-slate-200`}>
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 className={`text-4xl font-bold ${novaCut.className}`}>{props.courseName}</h1>
        </div>
      </div>
      <div className="absolute inset-0 bg-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex justify-center items-center">
        <Image className="h-auto w-5/6 rounded-xl object-cover [backface-visibility:hidden]" src={props.src} alt="" />  
      </div>
    </div>
  </div>
    );
}

const LangCard = (props)=>{
    return(
        <div class="h-32 w-32 relative mb-5">
            <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div class="absolute inset-0 transform hover:skew-y-12 transition duration-300">
                <div class="h-full w-full bg-white rounded-lg shadow-2xl">{props.lang}</div>
            </div>
        </div>
    );
}

export default Certificate;